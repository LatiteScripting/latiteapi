/**
 * @since 2.0.0
 */
declare interface World {
    /**
     * Returns `true` if in a world, returns `false` if not. You will only be able to use the World methods if you are in a world.
     * @since 2.0.0
     */
    exists(): boolean;

    /**
     * The saved world name.
     * @since 2.0.0
     */
    getName(): string;
    /**
     * Gets the name of the players connected to the world.
     * @since 2.0.0
     */
    getPlayers(): string[];

    /**
     * Returns true if it's your own local world. Returns false if not.
     * @since 2.0.0
     */
    isLocalWorld(): boolean;

    /**
     * Gets the clientside entity list (only if you have operator otherwise it will only return you)
     * @since 2.0.0
     */
    getEntities(): Entity[];

    /**
     * Gets the clientside number of entities (including you)
     * @since 2.0.0
     */
    getEntityCount(): number;
}

/**
 * @since 2.0.0
 */
declare const world: World;