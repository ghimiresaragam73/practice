function fruits(color) {
    this.color = 'yellow';
    this.origin = 'Nepal';
    this.color = color;
}
fruits.prototype.getColor = function () {
    return this.color;
};
fruits.prototype.setColor = function (newColor) {
    this.color = newColor;
};
fruits.prototype.abcd = function () {
    return this.getColor();
};

