/**
 * A class representing a Minecraft Item definition (not an item instance)
 * @since 2.0.0
 */
declare class Item {
    /**
     * The Namespaced ID of the item (e.g. `minecraft:stone`)
     * @since 2.0.0
     */
    public readonly name: string;
    /**
     * The translate name of the item (e.g. `item.stone`)
     * @since 2.0.0
     */
    public readonly translateName: string; 
}

/**
 * An instance of an `Item` (has count, damage, etc.)
 * @since 2.0.0
 */
declare class ItemStack {
    /**
     * The item type. Will be `null` when the item is air.
     * @since 2.0.0
     */
    public readonly item: Item | null;
    /**
     * The auxiliary/data value of the item (not damage) (-32768 to 32767)
     * @since 2.0.0
     */
    public readonly aux: number;

    /**
     * Get the display name (e.g. `Cooked Beef`)
     * @since 2.0.0
     */
    getDisplayName(): string;

    /**
     * Gets the number of items in the stack
     * @since 2.0.0
     */
    getCount(): number;

    /**
     * Gets the pickup time in milliseconds
     * @since 2.0.0
     */
    getPickupTime(): number;

    /**
     * Gets the damage of the item (e.g. if a sword was used once, it would have a damage value of 1)
     * @since 2.0.0
     */
    getDamage(): number;
}