/**
 * @since 2.0.0
 */
declare class Setting {
    /**
     * DO NOT USE - not implemented
     */
    constructor();

    /**
     * The name of the setting
     * @since 2.0.0
     */
    readonly name: string;
    /**
     * @since 2.0.0
     */
    readonly displayName: string;
    /**
     * @since 2.0.0
     */
    readonly description: string;

    /**
     * @since 2.0.0
     */
    toString(): string;

    /**
     * Gets the value of the setting. Could be null.
     * @since 2.0.0
     */
    getValue(): any;

    /**
     * Sets the setting value.
     * @param value The value to set. Must be of type corresponding to the type of the setting.
     * @since 2.0.0
     */
    setValue(value: any): void;

    /**
     * Set that this setting will only show when another setting is on or off.
     * @param settingName The setting that this setting will depend on (internal name).
     * @param value The value the other setting needs to be for this setting to show
     * @since 2.0.0
     */
    setCondition(settingName: string, value?: boolean): void;
}