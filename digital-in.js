led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        pins.analogWritePin(AnalogPin.P8, 1023)
    }
    else {
        pins.analogWritePin(AnalogPin.P8, 0)
    }
})

