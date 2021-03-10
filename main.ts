input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("GEMMA")
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 129)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            `)
        basic.pause(200)
    }
})
