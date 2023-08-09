interface IUtil {
    bufferToString(buf: Uint8Array): string;
    stringToBuffer(str: string): Uint8Array;
}

declare var util: IUtil;