/* This program will programmatically calibrate the soil sensor and measure water levels. 
It will take 3 sensor readings of the low and three readings of the high values of the range. 
When done, it will use the readings of the values to calibrate the sensor. 
The Micro-bit will light up as many rows of the LED matrix as correspond to the rescaled magnitude of the readings 
(when using the soil sensor). */

// Variables
let value1 = 0;
let soilLevel = 0;
let lowReading = 0;
let highReading = 0;

let lowReading1 = 0; // Low Readings
let lowReading2 = 0;
let lowReading3 = 0;

let highReading1 = 0; // High Readings
let highReading2 = 0;
let highReading3 = 0;

let lowAvg = 0; // Averages
let highAvg = 0;

// lowRead Function
function lowRead(lowReading: number) // Takes low Readings
{
    basic.showArrow(4) // Displays a downward arrow
    basic.pause(2000)
    basic.clearScreen()

    pins.digitalWritePin(DigitalPin.P8, 1) // Powers on sensor
    lowReading = pins.analogReadPin(AnalogPin.P0) // Reading
    pins.digitalWritePin(DigitalPin.P8, 0) // Powers off sensor

    return lowReading // Returns low Reading
    basic.pause(1100)
}

// highRead Function
function highRead(highReading: number) // Takes high Readings
{
    basic.showArrow(0) // Displays an upward arrow
    basic.pause(2000)
    basic.clearScreen()

    pins.digitalWritePin(DigitalPin.P8, 1) // Powers on sensor
    highReading = pins.analogReadPin(AnalogPin.P0) // Reading
    pins.digitalWritePin(DigitalPin.P8, 0) // Powers off sensor

    return highReading // Returns high Reading
    basic.pause(1100)
}

// getAvg Function
function getAvg(avg: number, num1: number, num2: number, num3: number) // Gets average of readings 
{
    avg = (num1 + num2 + num3) / 3
    return avg // Returns average
}

// Records data/readings
lowReading1 = lowRead(lowReading1)
highReading1 = highRead(highReading1)

lowReading2 = lowRead(lowReading2)
highReading2 = highRead(highReading2)

lowReading3 = lowRead(lowReading3)
highReading3 = highRead(highReading3)

lowAvg = getAvg(lowAvg, lowReading1, lowReading2, lowReading3)
highAvg = getAvg(highAvg, highReading1, highReading2, highReading3)

basic.showString("Calibration Success") 

basic.forever(function () 
{
    pins.digitalWritePin(DigitalPin.P8, 1) // Powers on sensor
    value1 = pins.analogReadPin(AnalogPin.P0) // Reading
    pins.digitalWritePin(DigitalPin.P8, 0) // Powers off sensor
    soilLevel = pins.map(value1, lowAvg, highAvg, 4, 0) // Maps reading

    for (let x = 0; x <= 5 - 1; x++) // Plots LEDs
    {
        for (let y = 5; y > soilLevel; y--) {
            led.plot(x, y)
        }
    }

    basic.pause(300)

    for (let j = 0; j <= 5 - 1; j++) // Unplots LEDs
    {
        for (let w = 5; w > soilLevel; w--) {
            led.unplot(j, w)
        }
    }
})