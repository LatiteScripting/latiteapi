var functions: Function[] = [];

export class AssertionError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export namespace LatiteUnit {
    function print(item: any) {
        clientMessage(item);
    }

    function success(item: any) {
        print(TextColor.GREEN + item);
    }

    function error(item: any) {
        print(TextColor.RED + item);
    }
    function error2(item: any) {
        print(TextColor.DARK_RED + item);
    }

    export function test(funcs: any) {
        let numPassed = 0;

        for (let unitTest = 0; unitTest < Object.keys(funcs).length; unitTest++) {
            let key = Object.keys(funcs)[unitTest];
            let maxTest = Object.keys(funcs).length;
            let str = `(${unitTest + 1}/${maxTest}) ${key}:`;

            try {
                funcs[key]();
                numPassed++;
                success(`${str} PASSED`)
            } catch (e) {
                if (e instanceof AssertionError) {
                    error(`${str} FAILED${e.message.length > 0 ? " - " + e.message : "" }`);
                } else {
                    error(`${str} FAILED - ${e}`);
                }
            }
        }
    }
}

export function assert(condition: boolean, message?: string): void {
    if (!condition) {
        throw new AssertionError(message as string);
    }
}

export function getn<T>(item: T | null | undefined): T  {
    assert(item !== null && item !== undefined);
    return item as T;
}