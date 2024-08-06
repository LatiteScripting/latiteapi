/**
 * @since 2.0.0
 */
interface ModuleManager {
    /**
     * Registers a module into the Latite mod. This makes it appear in the mod menu, and be interactive.
     * @param mod The module to register.
     * @since 2.0.0
     */
    registerModule(mod: Module): void;

    //deregisterModule(mod: Module): void;

    /**
     * Gets a module by the specified InternalName.
     * For example, ArmorHud is the internal name for Armor Hud.
     * Position is the internal name of Coordinates
     * @param name The name of the module to get.
     * @since 2.0.0
     */
    getModuleByName(name: string): Module | null;

    /**
     * Loop through each module.
     * @param callback
     * @since 2.0.0
     */
    forEachModule(callback: (mod: Module) => void): void;
}
