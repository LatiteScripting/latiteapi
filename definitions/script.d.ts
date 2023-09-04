interface Script {
    /**
     * Prints to chat, and logs the contents to file. They are seperated by new lines.
     * @param contents The contents to log.
     */
    log(... contents: any[]): void;

    name: string;
    author: string;
    version: string;
    description: string;
}
declare var script: Script;

interface EngineLibraries {
    "filesystem": include.Filesystem
    "network": include.Network
}

/**
 * Load a specified library.
 * @param path The filepath, HTTP or HTTPS link to the JS file.
 * @throws Invalid filepath or Non-OK HTTP/HTTPS error code
 */
declare function require<K extends keyof EngineLibraries>(path: K): EngineLibraries[K];
/**
 * Load a specified script from filesystem or web.
 * @param path The filepath, HTTP or HTTPS link to the JS file.
 * @throws Invalid filepath or Non-OK HTTP/HTTPS error code
 */
declare function require(path: string): object;

/**
 * Stops execution for a specified amount of time.
 * 
 * **Warning**: This stops execution of both the JavaScript runtime and the game thread. Be careful when using this.
 * @param ms The amount of time to sleep.
 */
declare function sleep(ms: number): void;