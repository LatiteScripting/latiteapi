interface ModuleEvents {
    "enable": () => void,
    "disable": () => void,
    "get-hold-to-toggle": () => boolean,
    
     /**
      * Only available in HUD modules.
      * @param isPreview If it's a preview in the main menu (when module settings are extended.)
      * @param isEditor If it's in the HUD editor where you move modules around.
      */
    "render": (isPreview: boolean, isEditor: boolean) => void,
     /**
     * Only available in HUD modules.
     */
    //"shouldRender": () => boolean;
    
    /**
     * Only available in text modules.
     */
    "text": (isPreview: boolean, isEditor: boolean) => string;
}

declare class Module {
    name: string
    displayName: string
    description: string
    key: KeyCode
    
    /**
     * IDs for script modules are always 255.
     */
    readonly id: number;
    /**
     * If the module is a HUD module (that you can move in the hud editor)
     */
    readonly visual: boolean;
    /**
     * If the module is visible in the ClickGui
     */
    readonly visible: boolean;

/**
 * 
 * @param name The internal name of the module.
 * @param displayName The display name of the module. Shown in the ClickGUI.
 * @param description A short description of what the module does.
 * @param key The default keybind to activate the module.
 */
    constructor(name: string, displayName: string, description: string, key: KeyCode);

    on: <K extends keyof ModuleEvents>(eventName: K, handler: ModuleEvents[K]) => void;

    /**
     * Checks if the module is enabled.
     */
    isEnabled(): boolean;

    /**
     * Set the module to be enabled or not.
     * @param b The new status of the module.
     */
    setEnabled(b: boolean): void;

    /**
     * Check if the module is blocked.
     */
    isBlocked(): boolean;
}
