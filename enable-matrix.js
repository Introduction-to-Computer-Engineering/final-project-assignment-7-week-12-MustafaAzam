led.enable(true)
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P5, 0)
pins.analogWritePin(AnalogPin.P8, 0)
basic.forever(function () {


    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
    `)

    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
    `)

    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
    `)
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P0, index)
            } else {
                pins.analogWritePin(AnalogPin.P0, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P0, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P5, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P5, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P5, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P8, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P8, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        control.waitMicros(1000)
    }
})
