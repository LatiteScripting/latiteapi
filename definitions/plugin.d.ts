/**
 * @since 2.0.0
 */
declare const enum Permission {
    /**
     * @since 2.0.0
     */
    SystemAccess = "permission.system_access",
}

/**
 * @since 2.0.0
 */
interface IPlugin {
    /**
     * @since 2.0.0
     */
    readonly name: string;
    /**
     * @since 2.0.0
     */
    readonly author: string;
    /**
     * @since 2.0.0
     */
    readonly version: string;
    /**
     * @since 2.0.0
     */
    readonly description: string;

    /**
     * Requests a permission.
     * @param permission The permissions to request.
     * @returns Whether or not the permission was requested.
     * @since 2.0.0
     */
    requestPermission(permission: Permission): boolean;    
}

/**
 * @since 2.0.0
 */
declare const plugin: IPlugin;