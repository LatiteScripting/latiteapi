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
     * @throws
     */
    attack(): void;
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
}

declare const enum LookingAt {
    Block,
    Entity,
    Air
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
     * Get the block selected by looking at it.
     */
    getSelectedBlock(): Vector3 | null;
}