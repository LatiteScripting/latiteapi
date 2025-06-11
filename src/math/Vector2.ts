Vector2.prototype.add = function (vec: IVector2) {
    return new Vector2(this.x + vec.x, this.y + vec.y);
}

Vector2.prototype.sub = function (vec: IVector2) {
    return new Vector2(this.x - vec.x, this.y - vec.y);
}

Vector2.prototype.mul = function (vec: IVector2) {
    return new Vector2(this.x * vec.x, this.y * vec.y);
}

Vector2.prototype.div = function (vec: IVector2) {
    return new Vector2(this.x / vec.x, this.y / vec.y);
}

Vector2.prototype.distanceTo = function(pos: IVector2) {
    return Math.sqrt((pos.x - this.x ** 2) + (pos.y - this.y) ** 2);
}