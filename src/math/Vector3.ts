Vector3.prototype.add = function (vec: IVector3) {
    return new Vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
}

Vector3.prototype.sub = function (vec: IVector3) {
    return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
}

Vector3.prototype.mul = function (vec: IVector3) {
    return new Vector3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
}

Vector3.prototype.div = function (vec: IVector3) {
    return new Vector3(this.x / vec.x, this.y / vec.y, this.z / vec.z);
}

Vector3.prototype.distanceTo = function (pos: IVector3): number {
    return Math.sqrt((pos.x - this.x) ** 2 + (pos.y - this.y) ** 2 + (pos.z - this.z) ** 2);
}
