declare interface Uint8Array {
    /**
     * Read a 16-bit, little-endian integer at the specified index.
     */
    readInt16(idx: number): number;
    /**
     * Read a 32-bit, little-endian integer at the specified index.
     */
    readInt32(idx: number): number;
    /**
     * Read a 64-bit, little-endian integer at the specified index, but truncated as a JavaScript `number` value. The maximum safely usable value that can be returned by this function is `Number.MAX_SAFE_INTEGER`.
     */
    readInt64AsFloat(idx: number): number;
    
    /**
     * Read a JavaScript-standard 32 bit floating point number at the specified index. 
     */
    readFloat32(idx: number): number;
    /**
     * Read a JavaScript-standard 64 bit floating point number at the specified index. 
     */
    readFloat64(idx: number): number;

    /**
     * Reads a null-terminated byte-per-character string at the specified index.
     */
    readString(idx: number): string;
}

/**
 * This declaration reperesents the interface used by the Latite API to represent byte arrays.
 */
declare type Buffer = Uint8Array;