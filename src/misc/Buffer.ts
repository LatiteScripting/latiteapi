Uint8Array.prototype.readInt32 = function(idx) {
    let thi: Uint8Array = this;
    let arrayBuf = thi.slice(idx, idx + 4);
    return new Int32Array(arrayBuf)[0];
}

Uint8Array.prototype.readInt64AsFloat64 = function(idx) {
    let lowOrder = this.readInt32(idx);
    let highOrder = this.readInt32(idx + 4);

    return lowOrder + highOrder * (2 ** 32);
}

Uint8Array.prototype.readFloat32 = function(idx) {
    let thi: Uint8Array = this;
    let arrayBuf = thi.slice(idx, idx + 4);
    return new Float32Array(arrayBuf)[0];
}


Uint8Array.prototype.readFloat64 = function(idx) {
    let thi: Uint8Array = this;
    let arrayBuf = thi.slice(idx, idx + 8);
    return new Float64Array(arrayBuf)[0];
}

Uint8Array.prototype.readString = function(idx) {
    let str = "";
    for (let i = 0; i < this.byteLength; ++i) {
        if (this[i] == 0) return str;
        str += String.fromCharCode(this[i]);
    }
    return str;
}
