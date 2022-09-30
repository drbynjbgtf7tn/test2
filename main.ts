basic.forever(function () {
    if (input.lightLevel() == 0) {
        basic.showString("FUFI")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
