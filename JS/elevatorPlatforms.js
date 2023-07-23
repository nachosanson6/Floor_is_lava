class ElevatorPlatforms {
    constructor(gameScreen, gameSize, playerPos, playerSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;


        this.elevatorPlatformsSize = {
            w: 150,
            h: 20
        }
        this.elevatorPlatformsPos = {
            left: 200,
            top: 0
        }

        this.elevatorPlatformsVel = {
            top: 3,
            gravity: .4
        }

        this.init()
    }

    init() {

        this.elevatorPlatformsElement = document.createElement('div')

        this.elevatorPlatformsElement.style.position = 'absolute'
        this.elevatorPlatformsElement.style.width = `${this.elevatorPlatformsSize.w}px`
        this.elevatorPlatformsElement.style.height = `${this.elevatorPlatformsSize.h}px`
        this.elevatorPlatformsElement.style.left = `${this.elevatorPlatformsPos.left}px`
        this.elevatorPlatformsElement.style.top = `${this.elevatorPlatformsPos.top}px`
        this.elevatorPlatformsElement.style.backgroundColor = '#BA7A4B'
        this.elevatorPlatformsElement.style.borderRadius = '10%'


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