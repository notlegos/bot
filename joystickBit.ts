// Add your code here


//% weight=0 color=#0fbc11  icon="\uf11b" block="Joystickbit"
namespace joystickbit {

    export enum JoystickBitPin {
        //% block="C"
        P12 = DAL.MICROBIT_ID_IO_P12,
        //% block="D"
        P13 = DAL.MICROBIT_ID_IO_P13,
        //% block="E"
        P14 = DAL.MICROBIT_ID_IO_P14,
        //% block="F"
        P15 = DAL.MICROBIT_ID_IO_P15
    }

    export enum rockerType {
        //% block="X"
        X,
        //% block="Y"
        Y
    }


    export enum ButtonType {
        //% block="pressed"
        down = PulseValue.High,
        //% block="released"
        up = PulseValue.Low
    }

    /**
    * initialization joystick:bit
    */
    //% blockId=initJoystickBit block="initialization joystick:bit"
    export function initJoystickBit(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }

    /**
    * get Button
    */
    //% blockId=getButton block="button %button is pressed"
    export function getButton(button: JoystickBitPin): boolean {
        return (pins.digitalReadPin(<number>button) == 0 ? true : false)
    }



    /**
    * Registers code to run when a joystick:bit event is detected.
    */
    //% blockId=onButtonEvent block="on button %button|is %event" blockExternalInputs=false
    export function onButtonEvent(button: JoystickBitPin, event: ButtonType, handler: Action): void {
        pins.onPulsed(<number>button, <number>event, handler);
    }



    /**
    * get rocker value
    * @param rocker describe parameter here, eg: 1
    */
    //% blockId=getRockerValue block="rocker value of %rocker"
    export function getRockerValue(rocker: rockerType): number {
        switch (rocker) {
            case rockerType.X: return pins.analogReadPin(AnalogPin.P1);
            case rockerType.Y: return pins.analogReadPin(AnalogPin.P2);
            default: return 0;
        }
    }




    /**
    * vibration motor
    * @param time describe parameter here, eg: 100
    */
    //% blockId=Vibration_Motor block="motor vibrate for %time ms"
    export function Vibration_Motor(time: number): void {
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(time)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
}