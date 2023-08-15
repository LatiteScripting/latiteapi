declare class Setting {
    /**
     * DO NOT USE - not implemented
     */
    constructor();

    /**
     * The name of the setting
     */
    readonly name: string;
    readonly displayName: string;
    readonly description: string;

    toString(): string;

    /**
     * Gets the value of the setting. Could be null.
     */
    getValue(): any;
}