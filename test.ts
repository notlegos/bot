// BOT CODE BELOW
let hits = 0
let lastHitWasRed = false
let isRed = false
basic.showIcon(IconNames.Heart)
let strip = Connected.create(Connected.DigitalRJPin.J1, 8, Connected.NeoPixelMode.RGB)
strip.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
let hitsRequired = 2
Connected.MP3SetPort(Connected.DigitalRJPin.J2)
Connected.setVolume(15)
Connected.folderPlay("01", "007")
Connected.showUserText(8, "goodbye daisy")
basic.pause(2000)
basic.showIcon(IconNames.Happy)
strip.showColor(Connected.colors(Connected.NeoPixelColors.Black))
Connected.execute(Connected.playType.Stop)
basic.forever(function () {
    isRed = Connected.checkColor(Connected.ColorList.red)
    Connected.showUserText(8, convertToText(isRed))
    if (isRed) {
        if (hits == hitsRequired) {
            Connected.setVolume(20)
            Connected.folderPlay("01", "004")
            basic.showIcon(IconNames.Sad)
            strip.showColor(Connected.colors(Connected.NeoPixelColors.Red))
        }
        if (!(lastHitWasRed)) {
            Connected.setVolume(25)
            Connected.folderPlay("01", "001")
            basic.showIcon(IconNames.Angry)
        }
        hits = hits + 1
        Connected.showUserNumber(2, hits)
    } else if (lastHitWasRed) {
        basic.showIcon(IconNames.Happy)
        hits = 0
        strip.showColor(Connected.colors(Connected.NeoPixelColors.Black))
    }
    lastHitWasRed = isRed
})
