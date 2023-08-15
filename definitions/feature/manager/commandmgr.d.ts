declare class CommandManager {
    /**
     * Gets the command prefix, default is '.'
     */
    getPrefix(): string;

    /**
     * Adds a command into the client
     * @param cmd The command to add
     */
    registerCommand(cmd: Command): void;

    /**
     * Removes a command from the client.
     * @param mod The command to deregister. Must be a script command.
     */
    deregisterCommand(cmd: Command): void;
}