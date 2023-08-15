declare interface Uint8Array {
    readInt32(idx: number): number;
    readInt64AsFloat(idx: number): number;
    
    readFloat32(idx: number): number;
    readFloat64(idx: number): number;

    /// Reads a null-terminated string
    readString(idx: number): string;
}

declare type Buffer = Uint8Array;