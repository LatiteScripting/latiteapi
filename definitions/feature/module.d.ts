/**
 * @since 2.0.0
 */
interface ModuleEvents {
    /**
    * Called on any module being enabled.
    * @since 2.0.0
    */
    "enable": () => void,
    /**
    * Called on any module being disabled.
    * @since 2.0.0
    */
    "disable": () => void,
    /**
    * Called on every frame. Return a bool to set the toggle form of the module - `true` makes it a hold module, like player list; `false`, standard toggle form.
    * @since 2.0.0
    */
    "get-hold-to-toggle": () => boolean, // I had no idea how to write this
    
    /**
    * Called on every frame; use this to render something arbitrary.
    * @note Only available in HUD modules.
    * @param isPreview If it's a preview in the main menu (when module settings are extended.)
    * @param isEditor If it's in the HUD editor where you move modules around.
    * @since 2.0.0
    */
    "render": (isPreview: boolean, isEditor: boolean) => void,
    /**
    * Only available in HUD modules.
    */
    //"shouldRender": () => boolean;
    
    /**
    * Called on every frame; use this to render text. Return a string to render it on the next frame.
    * @note Only available in text modules.
    * @since 2.0.0
    */
    "text": (isPreview: boolean, isEditor: boolean) => string;
}

/**
 * @since 2.0.0
 */
declare class Module {
    /**
     * @since 2.0.0
     */
    readonly name: string
    /**
     * @since 2.0.0
     */
    readonly displayName: string
    /**
     * @since 2.0.0
     */
    readonly description: string
    /**
     * @since 2.0.0
     */
    readonly key: KeyCode
    
    /**
     * IDs for script modules are always 255.
     * @since 2.0.0
     */
    readonly id: number;
    /**
     * If the module is a HUD module (that you can move in the hud editor)
     * @since 2.0.0
     */
    readonly visual: boolean;
    /**
     * If the module is visible in the ClickGui
     * @since 2.0.0
     */
    readonly visible: boolean;

    /**
     * 
     * @param name The internal name of the module.
     * @param displayName The display name of the module. Shown in the ClickGUI.
     * @param description A short description of what the module does.
     * @param key The default keybind to activate the module.
     * @since 2.0.0
     */
    constructor(name: string, displayName: string, description: string, key: KeyCode);

    /**
     * @since 2.0.0
     */
    on: <K extends keyof ModuleEvents>(eventName: K, handler: ModuleEvents[K]) => void;

    /**
     * Checks if the module is enabled.
     * @since 2.0.0
     */
    isEnabled(): boolean;

    /**
     * Set the module to be enabled or not.
     * @param b The new status of the module.
     * @since 2.0.0
     */
    setEnabled(b: boolean): void;

    /**
     * Check if the module is blocked.
     * @since 2.0.0
     */
    isBlocked(): boolean;

    /**
     * Gets the settings of the module.
     * @since 2.0.0
     */
    getSettings(): Setting[];

    /**
     * Adds a setting.
     * @param name The internal name
     * @param displayName The name that shows in the menu
     * @param description A short description of what the setting does
     * @param defVal The default value
     * @since 2.0.0
     */
    addBoolSetting(name: string, displayName: string, description: string, defVal: boolean): Setting;

    /**
     * Adds a setting.
     * @param name The internal name
     * @param displayName The name that shows in the menu
     * @param description A short description of what the setting does
     * @param min The minimum value
     * @param max The maximum value
     * @param interval The precision of the setting
     * @param defVal The default value
     * @since 2.0.0
     */
    addNumberSetting(name: string, displayName: string, description: string, min: number, max: number, interval: number, defVal: number): Setting;

    /**
     Adds a setting.
     * @param name The internal name
     * @param displayName The name that shows in the menu
     * @param description A short description of what the setting does
     * @param defVal The default value
     * @since 2.0.0
     */
    addKeySetting(name: string, displayName: string, description: string, defVal: KeyCode): Setting;

    /**
     Adds a setting.
     * @param name The internal name
     * @param displayName The name that shows in the menu
     * @param description A short description of what the setting does
     * @param defVal The default value
     * @since 2.0.0
     */
    addTextSetting(name: string, displayName: string, description: string, defVal: string): Setting;

    /**
     Adds a setting.
     * @param name The internal name
     * @param displayName The name that shows in the menu
     * @param description A short description of what the setting does
     * @param defVal The default value
     * @since 2.0.0
     */
     addColorSetting(name: string, displayName: string, description: string, defVal: Color): Setting;
}
