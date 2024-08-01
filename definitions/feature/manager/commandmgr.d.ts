/**
 * @since 2.0.0
 */
declare class CommandManager {
    /**
     * Gets the command prefix, default is '.'
     * @since 2.0.0
     */
    getPrefix(): string;

    /**
     * Adds a command into the client
     * @param cmd The command to add
     * @since 2.0.0
     */
    registerCommand(cmd: Command): void;

    //deregisterCommand(cmd: Command): void;
}