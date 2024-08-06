/**
 * @since 2.0.0
 */
interface EngineLibraries {
    /**
     * @since 2.0.0
     */
    "filesystem": include.Filesystem
    /**
     * @since 2.0.0
     */
    "http": include.HTTP
    /**
     * @since 2.0.0
     */
    "clipboard": include.Clipboard
}

/**
 * Adds chat message(s) to the chat.
 * @param contents The contents to send to chat. They will be separated into different chat messages.
 * @since 2.0.0
 */
declare function clientMessage(... messages: any[]): void;

/**
 * Load a specified library.
 * @param library The Latite Scripting engine built-in library.
 * @since 2.0.0
 */
declare function require<K extends keyof EngineLibraries>(library: K): EngineLibraries[K];

/**
 * Load and run a specified JavaScript module. This returns whatever is in `exports` or `module.exports` of the JavaScript module.
 * @param path The path to load the JavaScript file.
 * @since 2.0.0
 */
declare function require(path: string): any;

/**
 * Stops execution for a specified amount of time.
 * 
 * **Warning**: This stops execution of both the JavaScript runtime and the game thread. This is only for specific use cases (use setTimeout instead.)
 * @param ms The amount of time to sleep.
 * @since 2.0.0
 */
declare function sleep(ms: number): void;

/**
 * Delays a function call.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Timeout ID
 * @since 2.0.0
 */
declare function setTimeout(func: () => void, timeout: number): number;

/**
 * Calls a function every x milliseconds.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Interval ID
 * @since 2.0.0
 */
declare function setInterval(func: () => void, timeout: number): number;

/**
 * Cancels a timeout with a specified ID (stops it from executing.) No effect if the id is invalid.
 * @param timeoutId A valid Timeout ID. It is the return value of the `setTimeout` function.
 * @since 2.0.0
 */
declare function clearTimeout(timeoutId: number): void;

/**
 * Cancels an interval with a specified ID (stops it from executing.) No effect if the id is invalid.
 * @param intervalId A valid Interval ID. It is the return value of the `setInterval` function.
 * @since 2.0.0
 */
declare function clearInterval(intervalId: number): void;

/**
 * @since 2.0.0
 */
interface ScriptModule {
    /**
     * What the script exports.
     * @since 2.0.0
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