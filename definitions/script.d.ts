interface EngineLibraries {
    "filesystem": include.Filesystem
    "http": include.HTTP
    "clipboard": include.Clipboard
}

/**
 * Adds chat message(s) to the chat.
 * @param contents The contents to send to chat. They will be separated into different chat messages.
 */
declare function clientMessage(... messages: any[]): void;

/**
 * Load a specified library.
 * @param library The Latite Scripting engine built-in library.
 */
declare function require<K extends keyof EngineLibraries>(library: K): EngineLibraries[K];

/**
 * Load and run a specified JavaScript module. This returns whatever is in `exports` or `module.exports` of the JavaScript module.
 * @param path The path to load the JavaScript file.
 */
declare function require(path: string): any;

/**
 * Stops execution for a specified amount of time.
 * 
 * **Warning**: This stops execution of both the JavaScript runtime and the game thread. This is only for specific use cases (use setTimeout instead.)
 * @param ms The amount of time to sleep.
 */
declare function sleep(ms: number): void;

/**
 * Delays a function call.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Timeout ID
 */
declare function setTimeout(func: () => void, timeout: number): number;

/**
 * Calls a function every x milliseconds.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Timeout ID
 */
declare function setInterval(func: () => void, timeout: number): number;

interface ScriptModule {
    /**
     * What the script exports.
     */
    exports: {}
}

interface IScript {
    /**
     * @deprecated
     */
    name: string;

    /**
     * @deprecated
     */
    author: string;

    /**
     * @deprecated
     */
    description: string;

    /**
     * @deprecated
     * @param values 
     * @returns 
     */
    log: (... values: any[]) => void 
}

declare var script: IScript;