Color.RED = new Color(1, 0, 0, 1);
Color.GREEN = new Color(0, 1, 0, 1);
Color.BLUE = new Color(0, 0, 1, 1);
Color.WHITE = new Color(1, 1, 1, 1);
Color.BLACK = new Color(0, 0, 0, 1);

Color.prototype.asAlpha = function(opacity: number) {
    return new Color(this.r, this.g, this.b, opacity);
}

Color.RGB = function(r, g, b, a) {
    return new Color(r / 255, g / 255, b / 255, a ? (a / 255) : 1);
}