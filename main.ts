input.onButtonPressed(Button.A, function () {
    if (clickCt > CLICK_MIN) {
        clickCt += -1
        music.setVolume(MAX_VOLUME / CLICK_MAX * clickCt)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        led.setBrightness(BRIGHTNESS_MAX / CLICK_MAX * clickCt)
        basic.showNumber(clickCt)
    } else {
        clickCt = CLICK_MIN
    }
})
input.onButtonPressed(Button.B, function () {
    if (clickCt < CLICK_MAX) {
        clickCt += 1
        music.setVolume(MAX_VOLUME / CLICK_MAX * clickCt)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        led.setBrightness(BRIGHTNESS_MAX / CLICK_MAX * clickCt)
        basic.showNumber(clickCt)
    } else {
        clickCt = CLICK_MAX
        basic.showNumber(clickCt)
    }
})
let MAX_VOLUME = 0
let BRIGHTNESS_MAX = 0
let CLICK_MIN = 0
let clickCt = 0
let CLICK_MAX = 0
CLICK_MAX = 9
clickCt = 9
CLICK_MIN = 0
BRIGHTNESS_MAX = 255
led.setBrightness(BRIGHTNESS_MAX)
MAX_VOLUME = 127
music.setVolume(MAX_VOLUME)
music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
basic.showNumber(clickCt)
