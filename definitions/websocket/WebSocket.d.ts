declare const enum WebSocketEncoding {
    Binary = 0,
    Utf8 = 1
}

interface WebSocketEvents {
    /**
    * Called on a message being received.
    * @param data The data being received. Could be a string or buffer depending on the `WebSocketEncoding`.
    */
    "receive": (data: Buffer | string) => void,
    /**
    * Called on the WebSocket server or client closing the connection.
    */
    "close": () => void,
}

declare class WebSocket {
    constructor(url: string, encoding: WebSocketEncoding)

    send: (data: string | Buffer) => void
    close: (code?: number, reason?: string) => void
    on: <K extends keyof WebSocketEvents>(eventName: K, handler: WebSocketEvents[K]) => void;
}