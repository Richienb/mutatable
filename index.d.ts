/**
 * A mutatable object that can still be changed after being exported.
 * @example
 * ```
 * const Mutatable = require("mutatable");
 * const myVal = new Mutatable();
 *
 * someAsyncOperation().then(res => myVal.exportable = res)
 *
 * module.exports = myVal.exportable
 * ```
*/
declare class Mutatable {
    /**
     * @param initialData The intial data to set.
    */
    constructor(initialData?: any): void

    /**
     * The value which can be exported and modified.
     */
    public exportable: any
}

export = Mutatable;
