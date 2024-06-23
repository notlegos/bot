let hits = 0
let lastHitWasRed = false
let isRed = false
basic.showIcon(IconNames.Confused)
let strip = Connected.create(Connected.DigitalRJPin.J1, 8, Connected.NeoPixelMode.RGB)
let hitsRequired = 10
strip.showRainbow(1, 360)
Connected.MP3SetPort(Connected.DigitalRJPin.J2)
basic.pause(1000)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    strip.showColor(Connected.colors(Connected.NeoPixelColors.Red))
    isRed = Connected.checkColor(Connected.ColorList.red)
    if (isRed && !(lastHitWasRed)) {
        hits = 1
    } else if (isRed && lastHitWasRed) {
        hits = hits + 1
    } else {
        if (hits == hitsRequired) {
            basic.showIcon(IconNames.Heart)
            Connected.setVolume(6)
            Connected.folderPlay("01", "001")
            basic.pause(5000)
            Connected.execute(Connected.playType.Stop)
        }
        hits = 0
    }
    lastHitWasRed = isRed
    basic.clearScreen()
})
