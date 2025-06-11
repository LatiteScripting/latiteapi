declare interface IRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

declare interface IVector2 {
    x: number;
    y: number;
}

declare interface IVector3 extends IVector2 {
    z: number;
}

/**
 * A class representing a rectangle on the screen.
 * @member left The x coordinate of the top-left point.
 * @member top The y coordinate of the top-left point.
 * @member right The x coordinate of the bottom-right point.
 * @member bottom The y coordinate of the bottom-right point.
 */
declare class Rect implements IRect {
    /**
     * 
     * @param left The x coordinate of the top-left point.
     * @param top The y coordinate of the top-left point.
     * @param right The x coordinate of the bottom-right point.
     * @param bottom The y coordinate of the bottom-right point.
     */
    constructor(left: number, top: number, right: number, bottom: number);

    left: number;
    top: number;
    right: number;
    bottom: number;

    getWidth(): number;
    getHeight(): number;
}


declare class Vector2 implements IVector2 {
    add: (vec: IVector2) => Vector2;
    sub: (vec: IVector2) => Vector2;
    mul: (vec: IVector2) => Vector2;
    div: (vec: IVector2) => Vector2;
    distanceTo: (pos: IVector2) => number;
    /**
     * A point on the screen.
     * @param x The x coordinate.
     * @param y The y coordinate.
     */
    constructor(x: number, y: number);
    constructor();

    x: number;
    y: number;
}

declare class Vector3 implements IVector3 {
    add: (vec: IVector3) => Vector3;
    sub: (vec: IVector3) => Vector3;
    mul: (vec: IVector3) => Vector3;
    div: (vec: IVector3) => Vector3;
    distanceTo: (pos: IVector3) => number;

    constructor(x: number, y: number, z: number);

    /**
     * Create a `Vector3` object with all fields initialized to `0`
     */
    constructor();

    x: number;
    y: number;
    z: number;
}

declare class Color {
    asAlpha: (opacity: number) => Color;

    public r: number;
    public g: number;
    public b: number;
    public a: number;

    /**
     * 
     * @param r Red (0.0 to 1.0)
     * @param g Green (0.0 to 1.0)
     * @param b Blue (0.0 to 1.0)
     * @param a Opacity (0.0 to 1.0)
     */
    constructor(r: number, g: number, b: number, a: number);

    constructor();

    /**
     * 
     * @param r Red (0 to 255)
     * @param g Green (0 to 255)
     * @param b Blue (0 to 255)
     * @param a Opacity (0 to 255)
     */
    static RGB(r: number, g: number, b: number, a?: number): Color;

    static WHITE: Color;
    static BLACK: Color;
    static RED: Color;
    static GREEN: Color;
    static BLUE: Color;
}

declare const enum TextAlignment {
    Left,
    Right,
    Center
}

declare const enum VerticalAlignment {
    Top,
    Bottom,
    Center
}

type BackendType 
    = 
    "dx" | "minecraft";

declare interface Graphics {
    /**
     * 
     * @param renderer `"dx"`: uses Direct2D/DirectWrite, `"minecraft":` use the Minecraft renderer
     */
    use(renderer: BackendType): void;
    drawRect(rect: IRect, color: Color, thickness: number, radius?: number): void;
    fillRect(rect: IRect, color: Color, radius?: number): void;

    getTextSize(text: string, textSize: number): Vector2;

    setClippingRect(rect: IRect): void;
    restoreClippingRect(): void;

    /**
     * Draws text on the position specified
     * @param pos The position to draw the text
     * @param text The text to draw
     * @param size The size of the text in pixels
     * @param color The color of the text
     */
    drawText(pos: IVector2, text: string, size: number, color: Color): void;

    /**
     * A full verison of drawText, where you can specify the bounds of the text and the alignment
     * @param area The place to render the text 
     * @param text The text to render
     * @param size The size of the text
     * @param color The color of the text
     * @param alignment The horizontal alignment
     * @param verticalAlignment The vertical alignment
     */
    drawTextFull(area: IRect, text: string, size: number, color: Color, alignment: TextAlignment, verticalAlignment: VerticalAlignment): void;

    /**
     * Draws a texture.
     * @param texture The texture to draw
     * @param pos The position to draw the texture
     * @param sizeX The size of the texture in pixels
     * @param sizeY The size of the texture in pixels
     * @param color The overlay color of the texture (defaults to white)
     */
    drawTexture(texture: Texture, pos: IVector2, sizeX: number, sizeY: number, color?: Color): void;

    /**
     * Draw an item instance.
     * @param item The item to draw
     * @param pos The position in pixels to draw the texture
     * @param sizeModifier The relative size modifier (defualt: 1.0, aka 16 pixels)
     * @param opacity The opacity of the item
     */
    drawItem(item: ItemStack, pos: IVector2, sizeModifier: number, opacity: number): void;
}

declare const graphics: Graphics;
