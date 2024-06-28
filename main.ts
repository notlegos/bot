joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    basic.showIcon(IconNames.Heart)
    radio.sendValue("message", input.runningTime())
    basic.pause(100)
    basic.clearScreen()
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
})
let isUp = false
let isLeft = false
let magnitude = 0
let isLeftRight = false
let inDeadzone = false
let theY = 0
let theX = 0
radio.setGroup(80)
joystickbit.initJoystickBit()
let deadzone = 20
basic.forever(function () {
    theX = joystickbit.getRockerValue(joystickbit.rockerType.X)
    theY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    inDeadzone = Math.abs(512 - theX) < deadzone && Math.abs(512 - theY) < deadzone
    if (inDeadzone) {
        basic.pause(2)
    } else {
        isLeftRight = Math.abs(512 - theX) > Math.abs(512 - theY)
        if (isLeftRight) {
            while (!(inDeadzone)) {
                theX = joystickbit.getRockerValue(joystickbit.rockerType.X)
                inDeadzone = Math.abs(512 - theX) < deadzone
                magnitude = Math.round(Math.map(Math.abs(512 - theX), 0, 512, 0, 100))
                isLeft = theX > 512
                if (isLeft) {
                    radio.sendValue("joyLeft", magnitude)
                } else {
                    radio.sendValue("joyRight", magnitude)
                }
            }
            radio.sendString("joyDead")
        } else if (!(isLeftRight)) {
            while (!(inDeadzone)) {
                theY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
                inDeadzone = Math.abs(512 - theY) < deadzone
                magnitude = Math.round(Math.map(Math.abs(512 - theY), 0, 512, 0, 100))
                isUp = theY > 512
                if (isUp) {
                    radio.sendValue("joyUp", magnitude)
                } else {
                    radio.sendValue("joyDown", magnitude)
                }
            }
            radio.sendString("joyDead")
        }
    }
    basic.pause(1000)
})
