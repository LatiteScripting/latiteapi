type NativeType = "void" | "float32" | "float64" | "int32" | "int64";

/**
 * A class representing a native DLL.
 */
declare class NativeModule {
    /**
     * Gets a module that's currently loaded.
     * 
     * The plugin needs the permission `Permission.SystemAccess` to use this.
     * 
     * This method is restricted to prevent cheating.
     * @param moduleName The module name, e.g. `"User32.dll"`
     */
    static get(moduleName: string): NativeModule | null;

    /**
     * The current handle of the module. Warning: will be truncated to Float64
     */
    readonly handle: number;

    /**
     * Calls a function.
     * 
     * This method is restricted to prevent cheating.
     * 
     * Every argument is passed as a little-endian integer. There may be precision loss when passing in numbers larger than `Number.MAX_SAFE_INTEGER`.
     * 
     * Strings passed in will be treated as wstrings (wide strings)
     * 
     * @param functionName The procedure name.
     * @param returnType The return type that is expected.
     * @param args Arguments to pass to the function. The maximum arguments is 15.
     */
    public call(functionName: string, returnType: NativeType, ...args: any[]): number | undefined;
}