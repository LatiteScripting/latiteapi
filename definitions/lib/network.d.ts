declare namespace include {
    interface HttpResponse {
        body: string,
        statusCode: number
    }
    interface Network {
        /**
         * Sends a basic GET request to a URL.
         * @param url The URL to send the request.
         */
        getSync(url: string): HttpResponse;
    }
}