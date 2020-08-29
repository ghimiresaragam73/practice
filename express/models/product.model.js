var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    point: Number,
    message: String,
    reviewer: String,
    file: String,
    product_id: Number,
    date: Date
})

var productSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    discription: String,
    brand: String,
    price: Number,
    color: String,
    modelNo: String,
    warrentyStatus: Boolean,
    warrentyPeriod: String,
    quantity: Number,
    size: String,
    varient: String,
    details: {
        weight: Number,
        body: String
    },
    reviews: [reviewSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    manuDate: Date,
    expiryDate: Date,
    origin: String,
    image: String,
    tags: [String]
}, {
    timestamps: true
});

var productModel = mongoose.model('product', productSchema);
module.exports = productModel;