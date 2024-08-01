declare namespace include {
    /**
     * @since 2.0.0
     */
    export interface HttpResponse {
        /**
         * The body, if the status code is 200 (OK)
         * @since 2.0.0
         */ 
        body: Buffer,
        /**
         * @since 2.0.0
         */
        statusCode: number,

        /**
         * The http client error message
         * @since 2.0.0
         */
        error?: string,
    }

    /**
     * @since 2.0.0
     */
    interface GetData {
        /**
         * @since 2.0.0
         */
        contentType?: string,
        /**
         * @since 2.0.0
         */
        content?: Buffer,
    }

    /**
     * @since 2.0.0
     */
    interface PostData {
        /**
         * @since 2.0.0
         */
        contentType?: string,
        /**
         * @since 2.0.0
         */
        content: Buffer,
    }

    interface HTTP {
        /**
         * Sends a basic GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @since 2.0.0
         */
        get(url: string, data?: GetData): HttpResponse;

        /**
         * Sends an async GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         * @since 2.0.0
         */
        getAsync(url: string, data: GetData, callback: (resp: HttpResponse) => void): void;
        
        /**
         * Sends a basic POST request to a URL.
         * @param url The URL to send a POST request.
         * @param data 
         * @since 2.0.0
         */
        post(url: string, data?: PostData): HttpResponse;

        /**
         * Sends an async POST request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         */
        //postAsync(url: string, data: GetData, callback: (err: number, resp: HttpResponse) => void): void;
    }
}
