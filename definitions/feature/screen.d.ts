interface ScreenEvents {
    /**
     * Calls on the screen being enabled.
     * @param ignoreAnimations If the screen should not have an opening animation.
     */
    "enable": (ignoreAnimations: boolean) => void,

    /**
    * Called on the screen being disabled.
    */
    "disable": () => void,

    /**
    * Called on every frame; use this to render something arbitrary.
    * @note This gets called whether the screen is on or off - this may be useful for animations.
    */
    "render": () => void,

    /**
     * Calls when the screen receives a key event.
     * @param key The key code
     * @param state The key's state. (true = down, false = up)
     * @returns Return `true` to cancel, `false` to pass through
     */
    "key": (key: KeyCode, state: boolean) => boolean | void;

    /**
     * Calls when the screen receives a mouse event.
     * @param button The mouse button
     * @param wheelDelta Scrolling direction and magnitude if it's a scroll event (positive = scroll up, negative = scroll down)
     * @param state The mouse's state (true = down, false = up)
     * @returns Return `true` to cancel, `false` to pass through
     */
    "mouse": (button: MouseButton, wheelDelta: number, state: boolean) => boolean | void;
}

declare class Screen {
    /**
     * Creates a screen. Must be registered, otherwise leaks may happen.
     * @param name The internal screen name.
     */
    constructor(name: string);

    /**
     * The name of the setting
     */
    readonly name: string;
    readonly displayName: string;
    readonly description: string;

    toString(): string;

    /**
     * If the screen is currently on or off
     */
    isActive(): boolean;
}