/**
 * A class representing an in-game entity.
 */
declare class Entity {
    /**
     * The runtime ID of the entity. Local player is always 1.
     */
    readonly runtimeId: number;

    /**
     * Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an 
     * event listener. This is to prevent the scripting engine from being used as a cheat.
     */
    isValid(): boolean;
    
    /**
     * Get the position. Note that this will fail if you dont have permission to get the position
     * @throws
     */
    getPosition(): Vector3;

    /**
     * Get the interpolated position. Use this in the context of rendering based on entity position.
     */
    getPositionInterpolated(): Vector3;

    /**
     * Get the position the entity was in the last tick.
     */
    getPreviousPosition(): Vector3;

    /**
     * Get the rotation. Note that this will fail if you dont have permission to get the rotation
     * @throws
     */
    getRotation(): Vector2;

    /**
     * Get the dimension name.
     * for example, "Overworld"
     */
    getDimensionName(): string;

    /**
     * Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10
     */
    getHurtTime(): number;

    /**
     * Whether the entity is a player or not.
     */
    isPlayer(): boolean;

    /**
     * Whether the entity is the local player (yourself) or not.
     */
    isLocalPlayer(): boolean;

    /**
     * Gets the entity type ID.
     * 
     * https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs
     */
    getEntityType(): number;

    /**
     * Makes your player attack the entity. Only works if you have operator
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     * @throws
     */
    attack(): void;

    /**
     * Gets the health of the entity.
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     */
    getHealth(): number;

    /**
     * Gets the hunger of the entity.
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     */
    getHunger(): number;

    /**
     * Gets the saturation of the entity.
     * 
     * This function is restricted - meaning it will only work on LocalPlayer or if you have OP
     */
    getSaturation(): number;

    /**
     * Gets the value of a MoLang variable. Returns `null` if the variable was not found.
     * @param name The variable name. Example: `variable.is_sneaking`
     */
    getMolangVariable(name: MolangVariables): MolangVariable;

    /**
     * Gets the value of a MoLang variable. Returns `null` if the variable was not found.
     * @param name The variable name. Example: `variable.is_sneaking`
     */
    getMolangVariable(name: string): MolangVariable | null;

    /**
     * [Experimental] sets a MoLang variable's value. Returns `null` if unsuccessful and the number that was set if it was successful.
     * @param name The variable name. Example: `variable.is_sneaking`
     * @param value The variable's new value.
     */
    setMolangVariable(name: string, value: number): number | null;

    /**
     * Gets a status flag's state in the current entity.
     * @param type The entity status flag to get
     */
    getFlag(flag: number): boolean;


    /**
     * Sets a status flag's state in the current entity.
     * @param type The entity status flag to get
     * @param value The new status flag value.
     */
    setFlag(flag: number, value: boolean): void;

    /**
     * Gets the entity's movement velocity. 
     */
    getVelocity(): Vector3;


    /**
     * Sets the entity's movement velocity. 
     * 
     * This function is restricted - it only works if you have operator.
     * @param vector The new velocity
     */
    setVelocity(vector: Vector3): void;
}

declare class Player extends Entity {
    /**
     * Get the player's name (same one as the player list in the pause menu.)
     */
    getName(): string;

    /**
     * Gets the player's Xbox User ID.
     */
    getXUID(): string;

    /**
     * Gets the item being held.
     */
    getHoldingItem(): ItemStack;

    /**
     * Gets the slot of the item being held.
     */
    getSelectedSlot(): number;

    /**
     * Gets the item at the current inventory slot. Will return null if the specified slot is out of bounds
     * @param slot The slot number
     */
    getItem(slot: number): ItemStack | null;

    /**
     * Gets an armor slot. Throws an error if the slot is out of bounds
     * @param slot The armor slot [0-3]
     */
    getArmorSlot(slot: number): ItemStack;
}

declare const enum LookingAt {
    Block,
    Entity,
    Air
}

interface MovementState {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
    jump: boolean;
    sneak: boolean;
    readonly sprintHeld: boolean;
}

declare class LocalPlayer extends Player {
    /**
     * Get the progress of breaking a block (ranging from 0 to 1)
     */
    getBreakProgress(): number;

    /**
     * Same as `getBreakProgress` but doesn't reset
     */
    getLastBreakProgress(): number;

    /**
     * Get the type of whatever the player is looking at.
     */
    getLookingAt(): LookingAt;

    /**
     * Get the block selected by looking at it. Will return null if no block is selected.
     */
    getSelectedBlock(): Vector3 | null;


    /**
     * Gets the movement state of the player (i.e. the movement keys held.)
     */
    getMovementState(): MovementState;

    /**
     * Sets the movement state of the player
     * @param state The state to update to
     */
    setMovementState(state: MovementState): void;
}