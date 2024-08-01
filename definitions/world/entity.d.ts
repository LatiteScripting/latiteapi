/**
 * A class representing an in-game entity.
 * @since 2.0.0
 */
declare class Entity {
    /**
     * The runtime ID of the entity. Local player is always 1.
     * @since 2.0.0
     */
    readonly runtimeId: number;

    /**
     * Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an 
     * event listener. This is to prevent the scripting engine from being used as a cheat.
     * @since 2.0.0
     */
    isValid(): boolean;
    
    /**
     * Get the position. Note that this will fail if you dont have permission to get the position
     * @throws
     * @since 2.0.0
     */
    getPosition(): Vector3;

    /**
     * Get the interpolated position. Use this in the context of rendering based on entity position.
     * @since 2.0.0
     */
    getPositionInterpolated(): Vector3;

    /**
     * Get the position the entity was in the last tick.
     * @since 2.0.0
     */
    getPreviousPosition(): Vector3;

    /**
     * Get the rotation. Note that this will fail if you dont have permission to get the rotation
     * @throws
     * @since 2.0.0
     */
    getRotation(): Vector2;

    /**
     * Get the dimension name.
     * for example, "Overworld"
     * @since 2.0.0
     */
    getDimensionName(): string;

    /**
     * Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10
     * @since 2.0.0
     */
    getHurtTime(): number;

    /**
     * Whether the entity is a player or not.
     * @since 2.0.0
     */
    isPlayer(): boolean;

    /**
     * Whether the entity is the local player (yourself) or not.
     * @since 2.0.0
     */
    isLocalPlayer(): boolean;

    /**
     * Gets the entity type ID.
     * 
     * https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs
     * @since 2.0.0
     */
    getEntityType(): number;

    /**
     * Makes your player attack the entity. Only works if you have operator
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     * @throws
     * @since 2.0.0
     */
    attack(): void;

    /**
     * Gets the health of the entity.
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     * @since 2.0.0
     */
    getHealth(): number;

    /**
     * Gets the hunger of the entity.
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     * @since 2.0.0
     */
    getHunger(): number;

    /**
     * Gets the saturation of the entity.
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     * @since 2.0.0
     */
    getSaturation(): number;

    /**
     * Gets the value of a MoLang variable. Returns `null` if the variable was not found.
     * @param name The variable name. Example: `variable.is_sneaking`
     * @since 2.0.0
     */
    getMolangVariable(name: MolangVariables): MolangVariable;

    /**
     * Gets the value of a MoLang variable. Returns `null` if the variable was not found.
     * @param name The variable name. Example: `variable.is_sneaking`
     * @since 2.0.0
     */
    getMolangVariable(name: string): MolangVariable | null;

    /**
     * [Experimental] sets a MoLang variable's value. Returns `null` if unsuccessful and the number that was set if it was successful.
     * @param name The variable name. Example: `variable.is_sneaking`
     * @param value The variable's new value.
     * @since 2.0.0
     */
    setMolangVariable(name: string, value: number): number | null;

    /**
     * Gets a status flag's state in the current entity.
     * @param type The entity status flag to get
     * @since 2.1.0
     */
    getFlag(flag: number): boolean;


    /**
     * Sets a status flag's state in the current entity.
     * @param type The entity status flag to get
     * @param value The new status flag value.
     * @since 2.1.0
     */
    setFlag(flag: number, value: boolean): void;
}

declare class Player extends Entity {
    /**
     * Get the player's name (same one as the player list in the pause menu.)
     * @since 2.0.0
     */
    getName(): string;

    /**
     * Gets the player's Xbox User ID.
     * @since 2.0.0
     */
    getXUID(): string;

    /**
     * Gets the item being held.
     * @since 2.0.0
     */
    getHoldingItem(): ItemStack;

    /**
     * Gets the slot of the item being held.
     * @since 2.0.0
     */
    getSelectedSlot(): number;

    /**
     * Gets the item at the current inventory slot. Will return null if the specified slot is out of bounds
     * @param slot The slot number
     * @since 2.0.0
     */
    getItem(slot: number): ItemStack | null;
}

/**
 * @since 2.0.0
 */
declare const enum LookingAt {
    /**
     * @since 2.0.0
     */
    Block,
    /**
     * @since 2.0.0
     */
    Entity,
    /**
     * @since 2.0.0
     */
    Air
}

/**
 * @since 2.0.0
 */
declare class LocalPlayer extends Player {
    /**
     * Get the progress of breaking a block (ranging from 0 to 1)
     * @since 2.0.0
     */
    getBreakProgress(): number;

    /**
     * Same as `getBreakProgress` but doesn't reset
     * @since 2.0.0
     */
    getLastBreakProgress(): number;

    /**
     * Get the type of whatever the player is looking at.
     * @since 2.0.0
     */
    getLookingAt(): LookingAt;

    /**
     * Get the block selected by looking at it. Will return null if no block is selected.
     * @since 2.0.0
     */
    getSelectedBlock(): Vector3 | null;
}