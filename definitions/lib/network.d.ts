declare namespace include {
    interface HttpResponse {
        /**
         * The body, if the status code is 200 (OK)
         */ 
        body: Uint8Array,
        statusCode: number
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
         * Sends a basic POST request to a URL.
         * @param url The URL to send a POST request.
         * @param data 
         */
        postSync(url: string, data?: PostData): HttpResponse;
    }
}
