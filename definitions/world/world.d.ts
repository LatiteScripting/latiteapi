declare interface World {
    /**
     * The saved world name.
     */
    getName(): string;
    /**
     * Gets the name of the players connected to the world.
     */
    getPlayers(): string[];

    /**
     * Returns true if it's your own local world. Returns false if not.
     */
    isLocalWorld(): boolean;
}