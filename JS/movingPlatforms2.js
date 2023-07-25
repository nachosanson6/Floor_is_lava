class MovingPlatform2 {
    constructor(gameScreen, gameSize, playerPos, playerSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.movingPlatforms2Size = {
            w: 150,
            h: 20
        }
        this.movingPlatforms2Pos = {
            left: this.gameSize.w - 1000,
            top: 150
        }

        this.movingPlatforms2Vel = {
            left: 4,

        }

        this.init()
    }

    init() {

        this.movingPlatforms2Element = document.createElement('div')

        this.movingPlatforms2Element.style.position = 'absolute'
        this.movingPlatforms2Element.style.width = `${this.movingPlatforms2Size.w}px`
        this.movingPlatforms2Element.style.height = `${this.movingPlatforms2Size.h}px`
        this.movingPlatforms2Element.style.left = `${this.movingPlatforms2Pos.left}px`
        this.movingPlatforms2Element.style.top = `${this.movingPlatforms2Pos.top}px`
        this.movingPlatforms2Element.style.backgroundColor = '#BA7A4B'
        this.movingPlatforms2Element.style.borderRadius = '10%'


        this.gameScreen.appendChild(this.movingPlatforms2Element)

    }

    move() {
        this.checkCollision()

        this.movingPlatforms2Pos.left += this.movingPlatforms2Vel.left

        this.updatePosition()

    }

    checkCollision() {
        if (this.movingPlatforms2Pos.left <= 370) {
            this.movingPlatforms2Vel.left *= -1
        }

        if (this.movingPlatforms2Pos.left + this.movingPlatforms2Size.w >= 1050) {
            this.movingPlatforms2Vel.left *= -1
        }
    }

    updatePosition() {
        this.movingPlatforms2Element.style.left = `${this.movingPlatforms2Pos.left}px`
        this.movingPlatforms2Element.style.top = `${this.movingPlatforms2Pos.top}px`
    }
}