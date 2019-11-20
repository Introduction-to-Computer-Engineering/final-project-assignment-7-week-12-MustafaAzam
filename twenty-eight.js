led.enable(true)
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P5, 0)
pins.analogWritePin(AnalogPin.P8, 0)


basic.forever(function () {
    led.plotBrightness(0, 0, 10)
    basic.pause(100)
    led.plotBrightness(1, 0, 20)
    basic.pause(100)
    led.plotBrightness(2, 0, 30)
    basic.pause(100)
    led.plotBrightness(3, 0, 40)
    basic.pause(100)
    led.plotBrightness(4, 0, 50)
    basic.pause(100)

    led.plotBrightness(4, 1, 60)
    basic.pause(100)
    led.plotBrightness(4, 2, 70)
    basic.pause(100)
    led.plotBrightness(4, 3, 80)
    basic.pause(100)
    led.plotBrightness(4, 4, 90)
    basic.pause(100)

    led.plotBrightness(3, 4, 100)
    basic.pause(100)
    led.plotBrightness(2, 4, 110)
    basic.pause(100)
    led.plotBrightness(1, 4, 120)
    basic.pause(100)
    led.plotBrightness(0, 4, 130)
    basic.pause(100)

    led.plotBrightness(0, 3, 140)
    basic.pause(100)
    led.plotBrightness(0, 2, 150)
    basic.pause(100)
    led.plotBrightness(0, 1, 160)
    basic.pause(100)

    led.plotBrightness(1, 1, 170)
    basic.pause(100)
    led.plotBrightness(2, 1, 180)
    basic.pause(100)
    led.plotBrightness(3, 1, 190)
    basic.pause(100)

    led.plotBrightness(3, 2, 200)
    basic.pause(100)
    led.plotBrightness(3, 3, 210)
    basic.pause(100)

    led.plotBrightness(2, 3, 220)
    basic.pause(100)

    led.plotBrightness(1, 3, 230)
    basic.pause(100)

    led.plotBrightness(1, 2, 240)
    basic.pause(100)

    led.plotBrightness(2, 2, 255)
    basic.pause(100)

    //-------------------------------------

    led.unplot(0, 0)
    basic.pause(100)
    led.unplot(1, 0)
    basic.pause(100)
    led.unplot(2, 0)
    basic.pause(100)
    led.unplot(3, 0)
    basic.pause(100)
    led.unplot(4, 0)
    basic.pause(100)

    led.unplot(4, 1)
    basic.pause(100)
    led.unplot(4, 2)
    basic.pause(100)
    led.unplot(4, 3)
    basic.pause(100)
    led.unplot(4, 4)
    basic.pause(100)

    led.unplot(3, 4)
    basic.pause(100)
    led.unplot(2, 4)
    basic.pause(100)
    led.unplot(1, 4)
    basic.pause(100)
    led.unplot(0, 4)
    basic.pause(100)

    led.unplot(0, 3)
    basic.pause(100)
    led.unplot(0, 2)
    basic.pause(100)
    led.unplot(0, 1)
    basic.pause(100)

    led.unplot(1, 1)
    basic.pause(100)
    led.unplot(2, 1)
    basic.pause(100)
    led.unplot(3, 1)
    basic.pause(100)

    led.unplot(3, 2)
    basic.pause(100)
    led.unplot(3, 3)
    basic.pause(100)

    led.unplot(2, 3)
    basic.pause(100)

    led.unplot(1, 3)
    basic.pause(100)

    led.unplot(1, 2)
    basic.pause(100)

    led.unplot(2, 2)
    basic.pause(100)

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
