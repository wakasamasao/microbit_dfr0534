/**
* DFR0534
* Refer https://wiki.dfrobot.com/Voice_Module_SKU__DFR0534
* Fork https://github.com/51bit/dfplayermini
* 
* https://makecode.microbit.org/blocks/custom
*/

//% weight=100 color=#0fbc11 icon=""
namespace dfr0534 {
    let isConnected: boolean = false;

    function sendData(dataArr:number[]): void {
        let myBuf = pins.createBuffer(10);
        for (let i = 0; i < 10; i++) {
            myBuf.setNumber(NumberFormat.UInt8BE, i, dataArr[i])
        }
        serial.writeBuffer(myBuf)
        basic.pause(100)
    }

    /**
     * Connect DFR0534
     * @param pinRX RX Pin, eg: SerialPin.P2
     * @param pinTX TX Pin, eg: SerialPin.P1
     */
    //% blockId="DFR0534_connect" block="connect to DFR0534, RX:%pinRX|TX:%pinTX"
    //% weight=100 blockGap=20
    export function connect(pinRX: SerialPin = SerialPin.P2, pinTX: SerialPin = SerialPin.P1): void {
        serial.redirect(pinRX, pinTX, BaudRate.BaudRate9600)
        isConnected = true
        basic.pause(100)
    }

    /**
     * Specified Audio 
     * @param track Track Number, eg: 1
     */
    //% blockId="DFR0534_specifiedAudio" block="Specified Audio Play(1~255):%track"
    //% weight=99 blockGap=20 track.min=1 track.max=255
    export function specifiedAudio(track: number): void {
        if(track<1) track=1
        if(track>255) track=255
        sendData([0xAA,0x07,0x02,0x00,track,track+0xB3])
    }


    /**
     * Set Volume
     * @param volume Volume, eg: 10
     */
    //% blockId="DFR0534_volume" block="set volume(0~30):%volume"
    //% weight=98 blockGap=20 volume.min=0 volume.max=30
    export function volume(volume: number): void {
        if(volume<0) volume=0
        if(volume>30) volume=30
        sendData([0xAA,0x13,0x01,volume,volume+0xBE])
    }
}
