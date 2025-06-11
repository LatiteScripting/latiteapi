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
    constructor(name: string, key: KeyCode);

    /**
     * The name of the screen
     */
    readonly name: string;

    /**
     * Check if a certain point is hovered (usually by the mouse cursor).
     * @note Use this instead of doing your own bounds check, because this may prevent clicking through layered UIs.
     * @param rect The rectangle to check bounds
     * @param point The point to check (by default, mouse position.)
     */
    isHover(rect: IRect, point?: IVector2): boolean;

    /**
     * If the screen is currently on or off
     */
    isActive(): boolean;

    /**
     * Get the key used to activate the screen.
     */
    getKey(): KeyCode;

    /**
     * Set the key used to activate the screen.
     * @param key The key code to set to
     */
    setKey(key: KeyCode): void;

    on: <K extends keyof ScreenEvents>(eventName: K, handler: ScreenEvents[K]) => void;

    
    toString(): string;
}