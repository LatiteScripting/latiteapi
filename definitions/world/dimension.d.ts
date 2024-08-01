/**
 * @since 2.0.0
 */
declare interface Dimension {
    /**
     * Returns `true` if in a dimension, returns `false` if not. You will only be able to use the Dimension methods if you are in a world.
     * @since 2.0.0
     */
    exists(): boolean;

    /**
     * Gets a block at the specified position. Will return null if no block was found. (If it's air, it will also return a Block)
     * @param x Integer for x coordinate
     * @param y Integer for y coordinate
     * @param z Integer for z coordinate
     * @since 2.0.0
     */
    getBlock(x: number, y: number, z: number): Block;


    /**
     * Gets the dimension's name, for example, `"Overworld"`
     * @since 2.0.0
     */
    getName(): string;
}

/**
 * @since 2.0.0
 */
declare const dimension: Dimension;