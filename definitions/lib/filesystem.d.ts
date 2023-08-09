declare namespace include {
    interface Filesystem {
        /**
         * Reads a file asynchronously.
         * @param path The path to read from.
         * @param callback 
         */
        read(path: string, callback: (err: number, content: Uint8Array) => void): void;
        
        /**
         * 
         * @param path The path to write to
         * @param data The data to write (see util.stringToBuffer to convert a string to a buffer)
         * @param callback 
         */
        write(path: string, data: Uint8Array, callback: (err: number) => void): void;

        /**
         * Reads a file from the path specified.
         * @param path The relative path from the script.
         */
        readSync(path: string): Uint8Array;
        /**
         * Writes a file to the path specified.
         * @param path The relative path from the script.
         * @param data The data to write.
         */
        writeSync(path: string, data: Uint8Array): void;

        /**
         * Checks if a file or a directory exists
         * @param path The path to check if a file or directory exists
         */
        existsSync(path: string): boolean;

        /**
         * Creates a folder/directory.
         * @param path The path to create a directory.
         */
        createDirectorySync(path: string): void;
    }
}