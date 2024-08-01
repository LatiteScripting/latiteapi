/**
 * @since 2.0.0
 */
interface IUtil {
    /**
     * Converts a buffer into a UTF-8 string.
     * @param buf 
     * @since 2.0.0
     */
    bufferToString(buf: Buffer): string;
    /**
     * Converts a string to a UTF-8 buffer.
     * @param str 
     * @since 2.0.0
     */
    stringToBuffer(str: string): Buffer;
}

/**
 * @since 2.0.0
 */
declare var util: IUtil;