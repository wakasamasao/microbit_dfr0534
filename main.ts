input.onButtonPressed(Button.A, function () {
    volume += 5
    if (volume > 30) {
        volume = 30
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showArrow(ArrowNames.North)
    }
    dfr0534.volume(volume)
})
input.onGesture(Gesture.Shake, function () {
    dfr0534.specifiedAudio(track)
    basic.showArrow(ArrowNames.East)
    track += 1
    if (track > 3) {
        track = 1
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    volume += -5
    if (volume < 0) {
        volume = 0
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.showArrow(ArrowNames.South)
    }
    dfr0534.volume(volume)
})
let track = 0
let volume = 0
basic.showIcon(IconNames.Heart)
dfr0534.connect(SerialPin.P2, SerialPin.P1)
volume = 10
track = 1
dfr0534.volume(volume)
