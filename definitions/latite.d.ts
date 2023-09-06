interface LatiteEvent {
}

interface CancellableEvent extends LatiteEvent {
    cancel: boolean;
}

interface SendChatEvent extends CancellableEvent {
    message: string;
}

interface ReceiveChatEvent extends LatiteEvent {
    message: string;
    sender: string;
    xuid: string;
}

declare const enum MouseButton {
    Left = 1,
    Right = 2,
    Middle = 3,
    Scroll = 4
}

interface ClickEvent extends CancellableEvent {
    button: MouseButton;
    isDown: boolean;
    mouseX: number;
    mouseY: number;
}

interface KeyEvent extends CancellableEvent {
    isDown: boolean;
    keyCode: KeyCode; // like 0x43
    keyAsChar: string; // like 'C'
}

interface ScriptEvent extends LatiteEvent {
    scriptName: string,
    scriptVersion: string,
    scriptAuthor: string
}

interface ClientEvents {
    /**
    * Called on every tick.
    */
    "world-tick": LatiteEvent,
    /**
    * Called on the user leaving a world.
    */
    "leave-game": LatiteEvent,
    /**
    * Called on every chat message received.
    * 
    * Listener:
    * ```ts
    * {
    *   message: string,
    *   sender: string,
    *   xuid: string
    * }
    * ```
    */
    "receive-chat": ReceiveChatEvent,
    /**
    * Called on every chat message sent. Cancellable - setting `cancel` to true will make the game not see the event.
    * 
    * Listener:
    * ```ts
    * {
    *   message: string,
    *   cancel: boolean
    * }
    * ```
    */
    "send-chat": SendChatEvent,
    /**
    * Called on every frame; use this for 2D rendering.
    */
    "render2d": LatiteEvent,
    /**
    * Called on every frame; use this for DirectX rendering.
    */
    "renderDX": LatiteEvent,
    /**
    * Called on every keyboard input. Cancellable - setting `cancel` to true will make the game not see the event.
    * 
    * Listener:
    * ```ts
    * {
    *   isDown: boolean,
    *   keyCode: KeyCode,
    *   keyAsChar: string,
    *   cancel: boolean
    * }
    * ```
    */
    "key-press": KeyEvent,
    /**
    * Called on every (non-move) mouse input. Cancellable - setting `cancel` to true will make the game not see the event.
    * 
    * Listener:
    * ```ts
    * {
    *   button: MouseButton,
    *   isDown: boolean,
    *   mouseX: number,
    *   mouseY: number,
    *   cancel: boolean
    * }
    * ```
    */
    "click": ClickEvent,
    /**
    * Called on every frame; use this for 3D rendering.
    */
    "render3d": LatiteEvent,
    /**
    * Called on the game being minimized/closed.
    */
    "app-suspended": LatiteEvent,
    /**
    * Called on any script being loaded.
    * 
    * Listener:
    * ```ts
    * {
    *   scriptName: string,
    *   scriptVersion: string,
    *   scriptAuthor: string
    * }
    * ```
    */
    "load-script": ScriptEvent,
    /**
    * Called on any script being unloaded.
    * 
    * Listener:
    * ```ts
    * {
    *   scriptName: string,
    *   scriptVersion: string,
    *   scriptAuthor: string
    * }
    * ```
    */
    "unload-script": ScriptEvent,
}

interface Latite {
    /**
     * Listen to an event.
     */
    on<K extends keyof ClientEvents>(eventName: K, listener: (event: ClientEvents[K]) => void): void

    /**
     * Shows a Latite toast on the top of the screen.
     * @param notif The notification to show.
     */
    showNotification(notif: string): void;

    /**
     * Runs a Latite command.
     * @param cmd The command to run. Do not add the prefix (.)
     * @returns The success of the command.
     */
    runCommand(cmd: string): boolean;

    /**
     * Gets the module manager. Use this to register modules.
     */
    getModuleManager() : ModuleManager;

    /**
     * Gets the command manager. Use this to register commands.
     */
    getCommandManager(): CommandManager;

     /**
     * The Latite Client version. Example: "v2.0.0"
     */
    readonly version: string;
}

declare const client: Latite;