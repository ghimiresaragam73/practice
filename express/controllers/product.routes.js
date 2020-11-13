var productModel = require('./../models/product.model');
var router = require('express').Router();
var multer = require('multer');
var fs = require('fs');
/* var upload = multer({ dest: './uploads/' }); */
/* Diskstorage */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

function imageFilter(req, file, cb) {
    var imageType = file.mimetype.split('/')[0];
    if (imageType == 'image') {
        cb(null, true);
    } else {
        req.fileError = true;
        cb(null, false);
    }
}
var upload = multer({
    storage: storage,
    fileFilter: imageFilter
});
var authorize = require('./../middlewares/authorize');
var productHelp = require('./../helper/productHelp');

module.exports = function(ev){

router.route('/')
    .get(function (req, res, next) {
        productModel.find({})
            .populate('user', { username: 1 })
            .exec(function (err, products) {
                if (err) {
                    return next(err);
                }
                ev.emit('product',products);
                res.json(products);
            })
    })
    .post(upload.single('img'), function (req, res, next) {
        console.log('file is>>>>>', req.file);
        console.log('req.body is>>>>', req.body);
        /*  if (req.file) {
             var mimeType = req.file.mimetype;
             var imageType = mimeType.split('/')[0];
             if (imageType !== 'image') {
                 console.log('file removing before  ');
                 fs.unlink('./files/images/' + req.file.filename, function (err, done) {
                     if (err) {
                         console.log('file removing failed>>>', err);
                     } else {
                         console.log('file removed>>>>', done);
                     }
                 })
                 return next('Invalid file format');
             }
         } */
        if (req.fileError) {
            return next({
                message: 'Invalid File Format'
            })
        }
        var newProduct = new productModel({});
        newproduct = productHelp(newProduct, req.body);
        if (req.file)
            newProduct.image = req.file.filename;
        newProduct.user = req.loggedInUser._id;



        newProduct.save(function (err, product) {
            if (err) {
                return next(err);
            }
            res.json(product);
        })
    })



router.route('/search')
    .get(function (req, res, next) {
        var condition = {};
        var searchCondition = productHelp(condition, req.query);
        productModel.find(searchCondition)
            .exec(function (err, products) {
                if (err) {
                    return next(err);
                }
                res.json(products);
            })
    })
    .post(function (req, res, next) {
        console.log('req.body is>>>', req.body);
        var condition = {};
        var searchCondition = productHelp(condition, req.body);

        if(req.body.minPrice){
            searchCondition.price={
                $gte : req.body.minPrice
            }
        }
        if(req.body.maxPrice){
            searchCondition.price= {
                $lte: req.body.maxPrice
            }
        }
        if(req.body.minPrice && req.body.maxPrice){
            searchCondition.price= {
                $gte: req.body.minPrice,
                $lte: req.body.maxPrice
            }
        }
        console.log('Search Condition>>>', searchCondition);
        productModel.find(searchCondition)
            .exec(function (err, products) {
                if (err) {
                    console.log('errorrrrrrr>>>>>>', err);
                    return next(err);
                }
                console.log('Productsssss>>>', products);
                res.json(products);
            })
    })

router.route('/:id')
    .get(function (req, res, next) {
        productModel.findOne({
            _id: req.params.id
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                next(err);
            })
    })
    .put(upload.single('img'), function (req, res, next) {
        if (req.fileError) {
            next({
                message: 'invalid file format'
            });
        }
        var id = req.params.id;
        productModel.findById(id)
            .exec(function (err, product) {
                if (err) {
                    return next(err);
                }
                if (product) {
                    var updatedProduct = productHelp(product, req.body);
                    updatedProduct.user = req.loggedInUser._id;

                    if (req.file) {
                        fs.unlink('./files/images/' + product.image, function (err, done) {
                            if (err) {
                                console.log('File Removing Failed>>', err);
                            } else {
                                console.log('File Removed');
                            }
                        })
                        updatedProduct.image = req.file.filename;
                    }
                    updatedProduct.save(function (err, updated) {
                        if (err) {
                            return next(err);
                        }
                        res.json(updated);
                    })
                } else {
                    next('Product Not Found');
                }
            })
    })
    .delete(function (req, res, next) {
        productModel.findById(req.params.id)
            .then(function (product) {
                if (product) {
                    product.remove(function (err, removed) {
                        if (err) {
                            return next(err);
                        }
                        res.json(removed);
                    });
                } else {
                    next('user not found');
                }
            })
            .catch(function (err) {
                next(err);
            })
    });



return router;
}