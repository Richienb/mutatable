import test from "ava"
import Mutatable from "."

test("main", (t) => {
    const obj = new Mutatable()

    t.falsy(obj.exportable)

    obj.exportable = "Hello!"

    t.is(obj.exportable, "Hello!")
})

test("initial value", (t) => {
    const obj = new Mutatable("Hello!")

    t.is(obj.exportable, "Hello!")
})
