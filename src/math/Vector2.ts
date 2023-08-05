Vector2.prototype.add = function (vec: Vector2) {
    return new Vector2(this.x + vec.x, this.y + vec.y);
}

Vector2.prototype.sub = function (vec: Vector2) {
    return new Vector2(this.x - vec.x, this.y - vec.y);
}

Vector2.prototype.mul = function (vec: Vector2) {
    return new Vector2(this.x * vec.x, this.y * vec.y);
}

Vector2.prototype.div = function (vec: Vector2) {
    return new Vector2(this.x / vec.x, this.y / vec.y);
}

Vector2.prototype.distanceTo = function(pos: Vector2) {
    return Math.sqrt((pos.x - this.x ** 2) + (pos.y - this.y) ** 2);
}