basic.showNumber(0)
let speed = 0
basic.forever(function () {
    basic.showNumber(1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    basic.showNumber(0)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(500)
})
