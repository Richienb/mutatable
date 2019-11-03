"use strict"

const DATA = Symbol("data")

// TODO: Change symbol to private class field when NodeJS v10 LTS ends (30 April 2021)

module.exports = class Mutatable {
    constructor(initialData) {
        Object.defineProperty(this, DATA, {
            writable: true,
            value: initialData,
        })

        Object.defineProperty(this, "exportable", {
            get: () => this[DATA],
            set: (val) => this[DATA] = val,
            enumerable: true,
            configurable: false,
        })
    }
}
