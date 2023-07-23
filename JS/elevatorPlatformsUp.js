class ElevatorPlatformsUp {
    constructor(gameScreen, gameSize, playerPos, playerSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.elevatorPlatformsUpSize = {
            w: 150,
            h: 20
        }
        this.elevatorPlatformsUpPos = {
            left: this.gameSize.w - 350,
            top: this.gameSize.h
        }

        this.elevatorPlatformsUpVel = {
            top: 3,
            gravity: .4
        }

        this.init()
    }

    init() {

        this.elevatorPlatformsUpElement = document.createElement('div')

        this.elevatorPlatformsUpElement.style.position = 'absolute'
        this.elevatorPlatformsUpElement.style.width = `${this.elevatorPlatformsUpSize.w}px`
        this.elevatorPlatformsUpElement.style.height = `${this.elevatorPlatformsUpSize.h}px`
        this.elevatorPlatformsUpElement.style.left = `${this.elevatorPlatformsUpPos.left}px`
        this.elevatorPlatformsUpElement.style.top = `${this.elevatorPlatformsUpPos.top}px`
        this.elevatorPlatformsUpElement.style.backgroundColor = '#BA7A4B'
        this.elevatorPlatformsUpElement.style.borderRadius = '10%'


        this.gameScreen.appendChild(this.elevatorPlatformsUpElement)

    }

    move() {
        this.elevatorPlatformsUpPos.top -= this.elevatorPlatformsUpVel.top
        this.updatePosition()
    }

    updatePosition() {
        this.elevatorPlatformsUpElement.style.left = `${this.elevatorPlatformsUpPos.left}px`
        this.elevatorPlatformsUpElement.style.top = `${this.elevatorPlatformsUpPos.top}px`
    }
}