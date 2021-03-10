input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
})
basic.forever(function () {
    if (input.isGesture(Gesture.ScreenDown)) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 129)
    }
})
