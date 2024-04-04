declare interface Dimension {
    /**
     * Returns `true` if in a dimension, returns `false` if not. You will only be able to use the Dimension methods if you are in a world.
     */
    exists(): boolean;

    /**
     * Gets a block at the specified position. Will return null if no block was found. (If it's air, it will also return a Block)
     * @param x Integer for x coordinate
     * @param y Integer for y coordinate
     * @param z Integer for z coordinate
     */
    getBlock(x: number, y: number, z: number): Block;


    /**
     * Gets the dimension's name, for example, `"Overworld"`
     */
    getName(): string;
}


declare const dimension: Dimension;
