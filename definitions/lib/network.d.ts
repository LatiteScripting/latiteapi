declare namespace include {
    interface HttpResponse {
        /**
         * The body, if the status code is 200 (OK)
         */ 
        body: Uint8Array,
        statusCode: number,

        /**
         * A WinRT error. Undefined if no error
         */
        error: string,
    }

    interface GetData {
        contentType?: string,
        content?: Uint8Array,
    }

    interface PostData {
        contentType?: string,
        content: Uint8Array,
    }

    interface Network {
        /**
         * Sends a basic GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         */
        getSync(url: string, data?: GetData): HttpResponse;

        /**
         * Sends an async GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         */
        get(url: string, data: GetData, callback: (err: number, resp: HttpResponse) => void): void;
        
        /**
         * Sends a basic POST request to a URL.
         * @param url The URL to send a POST request.
         * @param data 
         */
        postSync(url: string, data?: PostData): HttpResponse;

        /**
         * Sends an async POST request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         */
        //post(url: string, data: GetData, callback: (err: number, resp: HttpResponse) => void): void;
    }
}
