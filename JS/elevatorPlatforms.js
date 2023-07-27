class ElevatorPlatforms {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;


        this.elevatorPlatformsSize = {
            w: 100,
            h: 20
        }
        this.elevatorPlatformsPos = {
            left: 170,
            top: 0
        }

        this.elevatorPlatformsVel = {
            top: 2,

        }

        this.init()
    }

    init() {

        this.elevatorPlatformsElement = document.createElement('div')


        this.elevatorPlatformsElement.style.position = 'absolute'
        this.elevatorPlatformsElement.style.backgroundImage = `url(./Images/plataforma.png)`
        this.elevatorPlatformsElement.style.backgroundSize = "cover"
        this.elevatorPlatformsElement.style.width = `${this.elevatorPlatformsSize.w}px`
        this.elevatorPlatformsElement.style.height = `${this.elevatorPlatformsSize.h}px`
        this.elevatorPlatformsElement.style.left = `${this.elevatorPlatformsPos.left}px`
        this.elevatorPlatformsElement.style.top = `${this.elevatorPlatformsPos.top}px`
        //this.elevatorPlatformsElement.style.backgroundColor = '#BA7A4B'



        this.gameScreen.appendChild(this.elevatorPlatformsElement)

    }

    move() {
        this.elevatorPlatformsPos.top += this.elevatorPlatformsVel.top
        this.updatePosition()
    }

    updatePosition() {
        this.elevatorPlatformsElement.style.left = `${this.elevatorPlatformsPos.left}px`
        this.elevatorPlatformsElement.style.top = `${this.elevatorPlatformsPos.top}px`
    }
}