class MovingPlatform {
    constructor(gameScreen, gameSize, left, top, vel) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;


        this.movingPlatformsSize = {
            w: 150,
            h: 20
        }

        this.movingPlatformsPos = {
            left: left,
            top: top
        }

        this.movingPlatformsVel = {
            left: vel,

        }

        this.init()
    }

    init() {

        this.movingPlatformsElement = document.createElement('div')

        this.movingPlatformsElement.style.position = 'absolute'
        this.movingPlatformsElement.style.backgroundImage = `url(./Images/plataforma.png)`
        this.movingPlatformsElement.style.backgroundSize = "cover"
        this.movingPlatformsElement.style.width = `${this.movingPlatformsSize.w}px`
        this.movingPlatformsElement.style.height = `${this.movingPlatformsSize.h}px`
        this.movingPlatformsElement.style.left = `${this.movingPlatformsPos.left}px`
        this.movingPlatformsElement.style.top = `${this.movingPlatformsPos.top}px`

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

        if (this.movingPlatformsPos.left + this.movingPlatformsSize.w >= 1150) {
            this.movingPlatformsVel.left *= -1
        }
    }

    updatePosition() {
        this.movingPlatformsElement.style.left = `${this.movingPlatformsPos.left}px`
        this.movingPlatformsElement.style.top = `${this.movingPlatformsPos.top}px`
    }
}