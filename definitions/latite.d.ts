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
    "world-tick": LatiteEvent,
    "leave-game": LatiteEvent,
    "receive-chat": ReceiveChatEvent,
    "send-chat": SendChatEvent,
    "render2d": LatiteEvent,
    "renderDX": LatiteEvent,
    "key-press": KeyEvent,
    "click": ClickEvent,
    "render3d": LatiteEvent,
    /**
     * Whenever the game gets minimized or closed.
     */
    "app-suspended": LatiteEvent,
    "load-script": ScriptEvent,
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
     * The Latite Client version. Example: v1.4.0 (release), b1.4.0 (beta)
     */
     version: string;
}

declare const client: Latite;
