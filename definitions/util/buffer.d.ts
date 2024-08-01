/**
 * @since 2.0.0
 */
declare interface Uint8Array {
    /**
     * 
     * @param idx
     * @since 2.0.0
     */
    readInt16(idx: number): number;
    /**
     * 
     * @param idx 
     * @since 2.0.0
     */
    readInt32(idx: number): number;
    /**
     * 
     * @param idx 
     * @since 2.0.0
     */
    readInt64AsFloat(idx: number): number;
    
    /**
     * 
     * @param idx 
     * @since 2.0.0
     */
    readFloat32(idx: number): number;
    /**
     * 
     * @param idx 
     * @since 2.0.0
     */
    readFloat64(idx: number): number;

    /**
     * Reads a null-terminated string.
     * @param idx
     * @since 2.0.0
     */
    readString(idx: number): string;
}

/**
 * @since 2.0.0
 */
declare type Buffer = Uint8Array;