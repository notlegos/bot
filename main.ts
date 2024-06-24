basic.showIcon(IconNames.Meh)
basic.forever(function () {
    Connected.laserSensor(Connected.DigitalRJPin.J4, true)
    Connected.showUserText(3, convertToText(Connected.PIR(Connected.DigitalRJPin.J3)))
})
