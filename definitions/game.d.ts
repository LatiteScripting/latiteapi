/**
 * @since 2.0.0
 */
interface Game {
    /**
     * Sends a chat message.
     * @param msg The message to send.
     * @since 2.0.0
     */
    sendChatMessage(msg: string): void;

    /**
     * Execute an in-game command.
     * @param cmd The command to send. Be sure to add '/' before your command.
     * @since 2.0.0
     */
    executeCommand(cmd: string): void;

    /**
     * Plays a sound. Refer to https://www.digminecraft.com/lists/sound_list_pe.php for sounds
     * @param soundName The sound name, for example: mob.enderdragon.growl
     * @param volume The volume of the sound. Default is 1
     * @param pitch Pitch of the sound. Default is 1
     * @since 2.0.0
     */
    playSoundUI(soundName: string, volume: number, pitch: number): void;

    /**
     * Get your player. This will return null if you are not in a game.
     * @since 2.0.0
     */
    getLocalPlayer(): LocalPlayer | null;

    /**
     * Gets the server you are connected to. This will return null if you are not in a server.
     * @since 2.0.0
     */
    getServer(): string | null;

    /**
     * Gets the featured server name you are connected to. This will return null if you are not in a featured server.
     * 
     * Featured server examples: "The Hive" "CubeCraft" "Mineville"
     * @since 2.0.0
     */
    getFeaturedServer(): string | null;

    /**
     * Gets the port of the server you're connected to. If you are not in a server, it returns 0.
     * @since 2.0.0
     */
    getPort(): number;

    /**
     * @deprecated use `world`
     * Get the World object.
     */
    getWorld() : World;


    /**
     * @deprecated use `dimension`
     * Get the Dimension object.
     */
    getDimension(): Dimension;

    /**
     * Get whether you are in a UI screen
     * @since 2.0.0
     */
    isInUI(): boolean;

    /**
     * Gets the size of the viewport.
     * @since 2.0.0
     */
    getScreenSize(): Vector2;

    /**
     * Get the mouse position.
     * @since 2.0.0
     */
    getMousePos(): Vector2;

    /**
     * @since 2.0.2
     */
    getFOV(): Vector2;

    /**
     * @since 2.0.2
     */
    getCameraPosition(): Vector3;

    /**
     * Captures the mouse cursor (hides it and allows the player to look around using the mouse cursor.)
     * @since 2.1.0
     */
    captureCursor(): void;

    /**
     * Releases the mouse cursor.
     * @since 2.1.0
     */
    releaseCursor(): void;

    /**
     * Gets the user's input setting. Usually a key code; for example, `"forward"` returns `KeyCode.W` by default.
     * 
     * If this function returns 0, either the key is set to nothing or the specified name was not found.
     * @since 2.0.0
     */
    getInputBinding(name: InputBinding | string): number;
}

/**
 * @since 2.0.0
 */
type InputBinding =
    "attack" |
    "pickItem" |
    "use" |
    "drop" |
    "hotbar.1" |
    "hotbar.2" |
    "hotbar.3" |
    "hotbar.4" |
    "hotbar.5" |
    "hotbar.6" |
    "hotbar.7" |
    "hotbar.8" |
    "hotbar.9" |
    "inventory" |
    "togglePerspective" |
    "jump" |
    "sneak" |
    "sprint" |
    "left" |
    "right" |
    "back" |
    "forward" |
    "mobEffects" |
    "chat" |
    "command" |
    "copyCoordinates" |
    "copyFacingCoordinates" |
    "toggleControlTips" |
    "codeBuilder" |
    "immersivereader" |
    "emote" |
    "menuTabLeft" |
    "menuTabRight" |
    "menuCancel";

/**
 * @since 2.0.0
 */
declare const game: Game;