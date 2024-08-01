declare namespace include {
    /**
     * @since 2.0.0
     */
    export interface Clipboard {
        /**
         * Gets the current clipboard text
         * @since 2.0.0
         */
        get(): string;

        /**
         * Sets the clipboard text
         * @param str The text to set the clipboard to
         * @since 2.0.0
         */
        set(str: string): void;

        /**
         * Gets the copied bitmap. If the clipboard is unable to be opened, it will return null
         * @since 2.0.0
         */
        getBitmap(): Buffer | null;
    }
}