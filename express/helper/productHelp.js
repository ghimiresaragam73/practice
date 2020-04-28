module.exports = function (object1, object2) {
    if (object2.name)
        object1.name = object2.name;
    if (object2.category)
        object1.category = object2.category;
    if (object2.brand)
        object1.brand = object2.brand;
    if (object2.discription)
        object1.discription = object2.discription;
    if (object2.price)
        object1.price = object2.price;
    if (object2.color)
        object1.color = object2.color;
    if (object2.size)
        object1.size = object2.size;
    if (object2.weight)
        object1.details.weight = object2.weight;
    if (object2.body)
        object1.details.body = object2.body;
    if (object2.origin)
        object1.origin = object2.origin;
    if (object2.manuDate)
        object1.manuDate = object2.manuDate;
    if (object2.expiryDate)
        object1.expiryDate = object2.expiryDate;
    if (object2.warrentyStatus)
        object1.warrentyStatus = object2.warrentyStatus;
    if (object2.warrentyPeriod)
        object1.warrentyPeriod = object2.warrentyPeriod;
    if (object2.tags)
        object1.tags = object2.tags.split(',');

    return object1;
}