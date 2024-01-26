let buttonPressed = false
let selectedDirection: string | undefined = ""
let i = 0
let directions: string[] = []
directions = ["forward", "left", "right", "backward", "square"]
let driving: boolean = false

basic.showIcon(IconNames.Heart)

input.onButtonPressed(Button.A, function (): void {
    if (buttonPressed == true) {
        if (i > 0) {
            i = i - 1
            selectedDirection = directions[i]
        }
    } else {
        selectedDirection = directions[0]
        buttonPressed = true
    }
})
input.onButtonPressed(Button.B, function (): void {
    if (buttonPressed === true) {
        if (i < directions.length - 1) {
            i = i + 1
            selectedDirection = directions[i]
        }
    } else {
        selectedDirection = directions[0]
        buttonPressed = true
    }
})

input.onButtonPressed(Button.AB, function (): void {
    startDriving(selectedDirection)
})

function startDriving(direction: string): void {
    if (direction == "forward") {
        basic.pause(5000)
        driveForward(5000)
    }

    if (direction == "left") {
        basic.pause(5000)
        turnLeft(2000)
    }

    if (direction == "right") {
        basic.pause(5000)
        turnRight(2000)
    }

    if (direction == "backward") {
        basic.pause(5000)
        driveBackward(5000)
    }

    if (direction == "square") {
        const driveTime: number = 2000
        const turnTime: number = 730
        const pauseTime: number = 2000

        basic.pause(5000)
        driveForward(driveTime)
        basic.pause(pauseTime)
        turnRight(turnTime)
        basic.pause(pauseTime)
        driveForward(driveTime)
        basic.pause(pauseTime)
        turnRight(turnTime)
        basic.pause(pauseTime)
        driveForward(driveTime)
        basic.pause(pauseTime)
        turnRight(turnTime)
        basic.pause(pauseTime)
        driveForward(driveTime)
        basic.pause(pauseTime)
        turnRight(turnTime)
    }
}

function driveForward(time: number): void {
    driving = true
    pins.servoWritePin(AnalogPin.P1, 130)
    pins.servoWritePin(AnalogPin.P2, 60)
    basic.pause(time)
    stop()
}

function driveBackward(time: number): void {
    driving = true
    pins.servoWritePin(AnalogPin.P1, 50)
    pins.servoWritePin(AnalogPin.P2, 130)
    basic.pause(time)
    stop()
}

function turnRight(time: number): void {
    driving = true
    pins.servoWritePin(AnalogPin.P1, 94)
    pins.servoWritePin(AnalogPin.P2, 94)
    basic.pause(time)
    stop()
}

function turnLeft(time: number): void {
    driving = true
    pins.servoWritePin(AnalogPin.P1, 80)
    pins.servoWritePin(AnalogPin.P2, 80)
    basic.pause(time)
    stop()
}

function stop(): void {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    driving = false
    basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
}

basic.forever(function (): void {
    if (driving) {
        basic.showAnimation(`
    . . . . . . . . . . # # # # #
    . . . . . . # . # . # . # . #
    . . # . . . . . . . # # . # #
    . . . . . . # . # . # . # . #
    . . . . . . . . . . # # # # #
    `)
    } else {
        if (selectedDirection == "forward") {
            basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        }

        if (selectedDirection == "left") {
            basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        }

        if (selectedDirection == "right") {
            basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        }

        if (selectedDirection == "backward") {
            basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        }

        if (selectedDirection == "square") {
            basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        }
    }
})
