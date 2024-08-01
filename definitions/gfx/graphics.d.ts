/**
 * A class representing a rectangle on the screen.
 * @member left The x coordinate of the top-left point.
 * @member top The y coordinate of the top-left point.
 * @member right The x coordinate of the bottom-right point.
 * @member bottom The y coordinate of the bottom-right point.
 * @since 2.0.0
 */
declare class Rect {
    /**
     * 
     * @param left The x coordinate of the top-left point.
     * @param top The y coordinate of the top-left point.
     * @param right The x coordinate of the bottom-right point.
     * @param bottom The y coordinate of the bottom-right point.
     * @since 2.0.0
     */
    constructor(left: number, top: number, right: number, bottom: number);

    /**
     * @since 2.0.0
     */
    left: number;
    /**
     * @since 2.0.0
     */
    top: number;
    /**
     * @since 2.0.0
     */
    right: number;
    /**
     * @since 2.0.0
     */
    bottom: number;

    /**
     * @since 2.0.0
     */
    getWidth(): number;
    /**
     * @since 2.0.0
     */
    getHeight(): number;
}

/**
 * @since 2.0.0
 */
declare class Vector2 {
    /**
     * @since 2.0.0
     */
    add: (vec: Vector2) => Vector2;
    /**
     * @since 2.0.0
     */
    sub: (vec: Vector2) => Vector2;
    /**
     * @since 2.0.0
     */
    mul: (vec: Vector2) => Vector2;
    /**
     * @since 2.0.0
     */
    div: (vec: Vector2) => Vector2;
    /**
     * @since 2.0.0
     */
    distanceTo: (pos: Vector2) => number;
    /**
     * A point on the screen.
     * @param x The x coordinate.
     * @param y The y coordinate.
     * @since 2.0.0
     */
    constructor(x: number, y: number);
    /**
     * @since 2.0.0
     */
    constructor();

    /**
     * @since 2.0.0
     */
    x: number;
    /**
     * @since 2.0.0
     */
    y: number;
}

/**
 * @since 2.0.0
 */
declare class Vector3 {
    /**
     * @since 2.0.0
     */
    add: (vec: Vector3) => Vector3;
    /**
     * @since 2.0.0
     */
    sub: (vec: Vector3) => Vector3;
    /**
     * @since 2.0.0
     */
    mul: (vec: Vector3) => Vector3;
    /**
     * @since 2.0.0
     */
    div: (vec: Vector3) => Vector3;
    /**
     * @since 2.0.0
     */
    distanceTo: (pos: Vector3) => number;

    /**
     * 
     * @param x 
     * @param y 
     * @param z 
     * @since 2.0.0
     */
    constructor(x: number, y: number, z: number);
    /**
     * @since 2.0.0
     */
    constructor();
    /**
     * @since 2.0.0
     */
    x: number;
    /**
     * @since 2.0.0
     */
    y: number;
    /**
     * @since 2.0.0
     */
    z: number;
}

/**
 * @since 2.0.0
 */
declare class Color {
    /**
     * @since 2.0.0
     */
    asAlpha: (opacity: number) => Color;

    /**
     * @since 2.0.0
     */
    public r: number;
    /**
     * @since 2.0.0
     */
    public g: number;
    /**
     * @since 2.0.0
     */
    public b: number;
    /**
     * @since 2.0.0
     */
    public a: number;

    /**
     * 
     * @param r Red (0.0 to 1.0)
     * @param g Green (0.0 to 1.0)
     * @param b Blue (0.0 to 1.0)
     * @param a Opacity (0.0 to 1.0)
     * @since 2.0.0
     */
    constructor(r: number, g: number, b: number, a: number);

    /**
     * @since 2.0.0
     */
    constructor();

    /**
     * 
     * @param r Red (0 to 255)
     * @param g Green (0 to 255)
     * @param b Blue (0 to 255)
     * @param a Opacity (0 to 255)
     * @since 2.0.0
     */
    static RGB(r: number, g: number, b: number, a?: number): Color; // THIS IS THE ONE THING I ACTUALLY CHANGED

    /**
     * @since 2.0.0
     */
    static WHITE: Color;
    /**
     * @since 2.0.0
     */
    static BLACK: Color;
    /**
     * @since 2.0.0
     */
    static RED: Color;
    /**
     * @since 2.0.0
     */
    static GREEN: Color;
    /**
     * @since 2.0.0
     */
    static BLUE: Color;
}

/**
 * @since 2.0.0
 */
declare const enum TextAlignment {
    /**
     * @since 2.0.0
     */
    Left,
    /**
     * @since 2.0.0
     */
    Right,
    /**
     * @since 2.0.0
     */
    Center
}

/**
 * @since 2.0.0
 */
declare const enum VerticalAlignment {
    /**
     * @since 2.0.0
     */
    Top,
    /**
     * @since 2.0.0
     */
    Bottom,
    /**
     * @since 2.0.0
     */
    Center
}

/**
 * @since 2.0.0
 */
type BackendType = 
    /**
     * @since 2.0.0
     */
    "dx";

/**
 * @since 2.0.0
 */
declare interface Graphics {
    /**
     * 
     * @param renderer `"dx"`: uses Direct2D/DirectWrite, `"minecraft":` use the Minecraft renderer
     * @since 2.0.0
     */
    use(renderer: "dx" | "minecraft"): void;
    /**
     * 
     * @param rect 
     * @param color 
     * @param thickness 
     * @param radius 
     * @since 2.0.0
     */
    drawRect(rect: Rect, color: Color, thickness: number, radius?: number): void;
    /**
     * 
     * @param rect 
     * @param color 
     * @param radius 
     * @since 2.0.0
     */
    fillRect(rect: Rect, color: Color, radius?: number): void;

    /**
     * 
     * @param text 
     * @param textSize 
     * @since 2.0.0
     */
    getTextSize(text: string, textSize: number): Vector2;

    /**
     * 
     * @param rect 
     * @since 2.0.0
     */
    setClippingRect(rect: Rect): void;
    /**
     * @since 2.0.0
     */
    restoreClippingRect(): void;

    /**
     * Draws text on the position specified
     * @param pos The position to draw the text
     * @param text The text to draw
     * @param size The size of the text in pixels
     * @param color The color of the text
     * @since 2.0.0
     */
    drawText(pos: Vector2, text: string, size: number, color: Color): void;

    /**
     * A full verison of drawText, where you can specify the bounds of the text and the alignment
     * @param area The place to render the text 
     * @param text The text to render
     * @param size The size of the text
     * @param color The color of the text
     * @param alignment The horizontal alignment
     * @param verticalAlignment The vertical alignment
     * @since 2.0.0
     */
    drawTextFull(area: Rect, text: string, size: number, color: Color, alignment: TextAlignment, verticalAlignment: VerticalAlignment): void;

    /**
     * Draws a texture.
     * @param texture The texture to draw
     * @param pos The position to draw the texture
     * @param sizeX The size of the texture in pixels
     * @param sizeY The size of the texture in pixels
     * @param color The overlay color of the texture (defaults to white)
     * @since 2.0.0
     */
    drawTexture(texture: Texture, pos: Vector2, sizeX: number, sizeY: number, color?: Color): void;
}

/**
 * @since 2.0.0
 */
declare const graphics: Graphics;