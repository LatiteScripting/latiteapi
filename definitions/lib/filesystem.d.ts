declare namespace include {
    interface Filesystem {
        /**
         * Reads a file from the path specified.
         * @param path The relative path from the script.
         */
        readSync(path: string): string;
        /**
         * Writes a file to the path specified.
         * @param path The relative path from the script.
         * @param data The data to write.
         */
        writeSync(path: string, data: string): void;
    }
}