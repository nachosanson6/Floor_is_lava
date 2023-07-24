class MovingPlatform {
    constructor(gameScreen, gameSize, playerPos, playerSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.movingPlatformsSize = {
            w: 150,
            h: 20
        }
        this.movingPlatformsPos = {
            left: this.gameSize.w - 700,
            top: 400
        }

        this.movingPlatformsVel = {
            left: 4,

        }

        this.init()
    }

    init() {

        this.movingPlatformsElement = document.createElement('div')

        this.movingPlatformsElement.style.position = 'absolute'
        this.movingPlatformsElement.style.width = `${this.movingPlatformsSize.w}px`
        this.movingPlatformsElement.style.height = `${this.movingPlatformsSize.h}px`
        this.movingPlatformsElement.style.left = `${this.movingPlatformsPos.left}px`
        this.movingPlatformsElement.style.top = `${this.movingPlatformsPos.top}px`
        this.movingPlatformsElement.style.backgroundColor = '#BA7A4B'
        this.movingPlatformsElement.style.borderRadius = '10%'


        this.gameScreen.appendChild(this.movingPlatformsElement)

    }

    move() {
        this.checkCollision()

        this.movingPlatformsPos.left += this.movingPlatformsVel.left

        this.updatePosition()

    }

    checkCollision() {
        if (this.movingPlatformsPos.left <= 370) {
            this.movingPlatformsVel.left *= -1
        }

        if (this.movingPlatformsPos.left + this.movingPlatformsSize.w >= 1050) {
            this.movingPlatformsVel.left *= -1
        }
    }

    updatePosition() {
        this.movingPlatformsElement.style.left = `${this.movingPlatformsPos.left}px`
        this.movingPlatformsElement.style.top = `${this.movingPlatformsPos.top}px`
    }
}