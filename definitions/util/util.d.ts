interface IUtil {
    /**
     * Converts a buffer into a UTF-8 string.
     * @param buf 
     */
    bufferToString(buf: Uint8Array): string;
    /**
     * Converts a string to a UTF-8 buffer.
     * @param str 
     */
    stringToBuffer(str: string): Uint8Array;
}

declare var util: IUtil;