/**
 * @since 2.0.0
 */
declare class HudModule extends Module {
    /**
     * 
     * @param name 
     * @param displayName 
     * @param description 
     * @param key 
     * @param resizable 
     * @since 2.0.0
     */
    constructor(name: string, displayName: string, description: string, key: KeyCode, resizable: boolean);

    /**
     * @since 2.0.0
     */
    getRect(): Rect;
    /**
     * @since 2.0.0
     */
    setRect(newRect: Rect): void;
    /**
     * @since 2.0.0
     */
    setBounds(width: number, height: number): void;
    /**
     * @since 2.0.0
     */
    getSize(): number;
    /**
     * @since 2.0.0
     */
    setSize(): number;
    /**
     * @since 2.0.0
     */
    getPos(): Vector2;
    /**
     * @since 2.0.0
     */
    setPos(x: number, y: number): void;
}

/**
 * @since 2.0.0
 */
declare class TextModule extends HudModule {
    /**
     * @since 2.0.0
     */
    constructor(name: string, displayName: string, description: string, key: KeyCode);
}