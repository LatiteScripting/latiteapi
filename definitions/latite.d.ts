/**
 * @since 2.0.0
 */
interface LatiteEvent {
}

/**
 * @since 2.0.0
 */
interface CancellableEvent extends LatiteEvent {
    cancel: boolean;
}

/**
 * @since 2.0.0
 */
interface SendChatEvent extends CancellableEvent {
    readonly message: string;
}

/**
 * @since 2.0.0
 */
type MessageType = 
    "raw" |
    "chat" |
    "translation" |
    "popup" |
    "jukebox" |
    "tip" |
    "system_message" |
    "whisper" |
    "announcement" |
    "text_object" |
    "object_whisper";

    /**
     * @since 2.0.0
     */
interface MessageEvent extends CancellableEvent {
    /**
     * @since 2.0.0
     */
    readonly type: MessageType;
    /**
     * Whether or not the message type is a chat message.
     * @since 2.0.0
     */
    readonly isChat: boolean;
    /**
     * @since 2.0.0
     */
    readonly message: string;

    /**
     * The sender of the message (if applicable)
     * @since 2.0.0
     */
    readonly sender: string;
    /**
     * The Xbox User ID of the sender (if applicable)
     * @since 2.0.0
     */
    readonly xuid: string;
}

/**
 * @since 2.0.0
 */
declare const enum MouseButton {
    /**
     * @since 2.0.0
     */
    Left = 1,
    /**
     * @since 2.0.0
     */
    Right = 2,
    /**
     * @since 2.0.0
     */
    Middle = 3,
    /**
     * @since 2.0.0
     */
    Scroll = 4
}

/**
 * @since 2.0.0
 */
interface ClickEvent extends CancellableEvent {
    /**
     * @since 2.0.0
     */
    readonly button: MouseButton;
    /**
     * @since 2.0.0
     */
    readonly isDown: boolean;
    /**
     * @since 2.0.0
     */
    readonly mouseX: number;
    /**
     * @since 2.0.0
     */
    readonly mouseY: number;
}

/**
 * @since 2.0.0
 */
interface KeyEvent extends CancellableEvent {
    /**
     * @since 2.0.0
     */
    readonly isDown: boolean;
    /**
     * Example: `0x43`
     * @since 2.0.0
     */
    readonly keyCode: KeyCode;
    /**
     * Example: `'C'`
     * @since 2.0.0
     */
    readonly keyAsChar: string;
}

/**
 * @since 2.0.0
 */
interface ScriptEvent extends LatiteEvent {
    /**
     * @since 2.0.0
     */
    readonly scriptName: string,
    /**
     * @since 2.0.0
     */
    readonly scriptVersion: string,
    /**
     * @since 2.0.0
     */
    readonly scriptAuthor: string
}

/**
 * @since 2.0.0
 */
type TitleType =
    "clear" |
    "reset" |
    "title" |
    "subtitle" |
    "actionbar" |
    "titleraw" |
    "subtitleraw" |
    "actionbarraw" |
    "times";

/**
 * @since 2.0.0
 */
interface TitleEvent extends CancellableEvent {
    readonly type: TitleType;
    readonly text: string;
}

/**
 * @since 2.0.0
 */
interface TextInputEvent extends CancellableEvent {
    readonly characters: string;
}

/**
 * @since 2.0.0
 */
interface ClientEvents {
    /**
    * Called on every tick.
    * @since 2.0.0
    */
    "world-tick": LatiteEvent,
    /**
     * Called whenever a world is joined.
     * @since 2.0.0
     */
    "join-game": LatiteEvent,

    /**
    * Called on the user leaving a world.
    * @since 2.0.0
    */
    "leave-game": LatiteEvent,
    /**
    * Called on every message received.
    * 
    * Listener:
    * ```ts
    * {
    *   type: MessageType;
    *   isChat: boolean;
    *   message: string;
    *   sender: string;
    *   xuid: string;
    * }
    * 
    * ```
    * @since 2.0.0
    */
    "receive-chat": MessageEvent,
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
    * @since 2.0.0
    */
    "send-chat": SendChatEvent,
    /**
    * Called on every frame; use this for 2D rendering.
    * @since 2.0.0
    */
    "render2d": LatiteEvent,
    /**
    * Called on every frame; use this for DirectX rendering.
    * @since 2.0.0
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
    * @since 2.0.0
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
    * @since 2.0.0
    */
    "click": ClickEvent,
    /**
    * Called on every frame; use this for 3D rendering.
    * @since 2.0.0
    */
    "render3d": LatiteEvent,
    /**
    * Called on the game being minimized/closed.
    * @since 2.0.0
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
    * @since 2.0.0
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
    * @since 2.0.0
    */
    "unload-script": ScriptEvent,

    /**
    * Called whenever you receive a title from the server.
    * 
    * Listener:
    * ```ts
    * {
    *   type: TitleType,
    *   text: string
    * }
    * ```
    * @since 2.0.0
    */
    "title": TitleEvent;

    /**
     * Called whenever text input is received.
     * 
     * ```ts
     * Listener:
     * {
     *   characters: string
     * }
     * ```
     * @since 2.0.0
     */
    "text-input": TextInputEvent;

    /**
     * Called whenever the server transfers a player into another server.
     * @since 2.0.0
     */
    "transfer": LatiteEvent;

    /**
     * Calls whenever the player goes into a different dimension.
     * @since 2.0.0
     */
    "change-dimension": LatiteEvent;
}

/**
 * @since 2.0.0
 */
interface Latite {
    /**
     * Listens to a client-side event.
     * @param eventName The event to listen to
     * @param listener The event callback
     * @param priority Positive or negative integer. The priority in which the event listener should have over other events globally.
     * The default is 0. Greater = called first, less = called later.
     * @since 2.0.0
     * @updated 2.1.0 (Added `priority`)
     */
    on<K extends keyof ClientEvents>(eventName: K, listener: (event: ClientEvents[K]) => void, priority?: number): void

    /**
     * Shows a Latite toast on the top of the screen.
     * @param notif The notification to show.
     * @since 2.0.0
     */
    showNotification(notif: string): void;

    /**
     * Runs a Latite command.
     * @param cmd The command to run. Do not add the prefix (.)
     * @returns The success of the command.
     * @since 2.0.0
     */
    runCommand(cmd: string): boolean;

    /**
     * Gets the module manager. Use this to register modules.
     * @since 2.0.0
     */
    getModuleManager(): ModuleManager;

    /**
     * Gets the command manager. Use this to register commands.
     * @since 2.0.0
     */
    getCommandManager(): CommandManager;

    /**
    * The Latite Client version. Example: "v2.0.0"
    * @since 2.0.0
    */
    readonly version: string;
}

/**
 * @since 2.0.0
 */
declare const client: Latite;