/**
 * A class representing an in-game entity.
 */
declare class Entity {
    /**
     * Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an 
     * event listener. This is to prevent the scripting engine from being used as a cheat.
     */
    isValid(): boolean;
    
    /**
     * Get the position. Note that this will fail if you dont have permission to get the position
     * @throws
     */
    getPos(): Vector3;
    /**
     * Get the rotation. Note that this will fail if you dont have permission
     * @throws
     */
    getRot(): Vector2;

    /**
     * Get the dimension.
     * for example, "Overworld"
     */
    getDimension(): string;
}

declare class Player extends Entity {
    /**
     * Get the player's name (same one as the player list in the pause menu.)
     */
    getName(): string;
}

declare const enum LookingAt {
    Block,
    Entity,
    Air
}

declare class LocalPlayer extends Player {
    /**
     * Get the progress of breaking a block (from 0 to 1)
     */
    getDestructionProgress(): number;

    /**
     * Get the type of whatever the player is looking at.
     */
    getLookingAt(): LookingAt;

    /**
     * Get the block selected by looking at it.
     */
    getSelectedBlock(): Vector3 | null;
}