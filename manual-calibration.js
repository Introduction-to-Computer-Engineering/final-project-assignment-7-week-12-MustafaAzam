/* This program will use a manually calibrated soil sensor to measure water levels. 
Then it will take the sensor readings and light up as many rows of the LED matrix as correspond to the rescaled magnitude of the readings. 
*/

basic.forever(function () 
{ 
    let value1 = 0 

    pins.digitalWritePin(DigitalPin.P8, 1) //Powers sensor
    value1 = pins.analogReadPin(AnalogPin.P0) // reading
    pins.digitalWritePin(DigitalPin.P8, 0) // Turn off sensor
    let soilValue = pins.map(value1, 55, 785, 4, 0) // Maps reading


    for (let x = 0; x < 5; x++) // Plots LED Matrix rows that correspond with reading
    { 
        for (let y = 5; y > soilValue; y--) 
        {
            led.plot(x, y)
        }
    }

    basic.pause(250)

    for (let x = 0; x < 5; x++) // Unplots LEDs
    { 
        for (let y = 5; y > soilValue; y--) 
        {
            led.unplot(x, y)
        }
    }
})