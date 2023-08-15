util = {
    bufferToString: function(buf: Uint8Array) {
        let str = "";
        for (let i = 0; i < buf.byteLength; ++i) {
            str += String.fromCharCode(buf[i]);
        }
        return str;
    },
    stringToBuffer: function(str: string) {
        let buf = new Uint8Array(str.length);
        for (let i = 0; i < str.length; ++i) {
            buf[i] = str.charCodeAt(i);
        }
        return buf;
    }
};

