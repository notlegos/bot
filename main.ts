makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
})
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.NEC)
basic.showIcon(IconNames.Surprised)
basic.forever(function () {
	
})
