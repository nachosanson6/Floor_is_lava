class ElevatorPlatformsUp {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.elevatorPlatformsUpSize = {
            w: 100,
            h: 20
        }
        this.elevatorPlatformsUpPos = {
            left: this.gameSize.w - 250,
            top: this.gameSize.h
        }

        this.elevatorPlatformsUpVel = {
            top: 2,
        }

        this.init()
    }

    init() {

        this.elevatorPlatformsUpElement = document.createElement('div')

        this.elevatorPlatformsUpElement.style.position = 'absolute'
        this.elevatorPlatformsUpElement.style.backgroundImage = `url(./Images/plataforma.png)`
        this.elevatorPlatformsUpElement.style.backgroundSize = "cover"
        this.elevatorPlatformsUpElement.style.width = `${this.elevatorPlatformsUpSize.w}px`
        this.elevatorPlatformsUpElement.style.height = `${this.elevatorPlatformsUpSize.h}px`
        this.elevatorPlatformsUpElement.style.left = `${this.elevatorPlatformsUpPos.left}px`
        this.elevatorPlatformsUpElement.style.top = `${this.elevatorPlatformsUpPos.top}px`



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