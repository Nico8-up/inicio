def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_arrow(ArrowNames.NORTH)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if input.is_gesture(Gesture.SCREEN_DOWN):
        music.play_melody("C5 C C5 C C5 C C5 C ", 129)
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        """)
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        """)
basic.forever(on_forever)
