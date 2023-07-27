class Enemy2 {
    constructor(gameScreen, gameSize, left, top, vel) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;


        this.enemy2Size = {
            w: 45,
            h: 45
        }

        this.enemy2Pos = {
            left: this.gameSize.w,
            top: (this.gameSize.h + 1000) * Math.random()
        }

        this.enemy2Vel = {
            left: 2,

        }
        this.enemyBackgroundPos = {
            x: 0,
            y: 0
        }
        this.enemySprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            framseSpeed: 4
        }

        this.init()
    }

    init() {

        this.enemy2Element = document.createElement('div')

        this.enemy2Element.style.position = 'absolute'
        this.enemy2Element.style.width = `${this.enemy2Size.w}px`
        this.enemy2Element.style.height = `${this.enemy2Size.h}px`
        this.enemy2Element.style.left = `${this.enemy2Pos.left}px`
        this.enemy2Element.style.top = `${this.enemy2Pos.top}px`
        this.enemy2Element.style.backgroundImage = `url(./Images/player2.png)`
        this.enemy2Element.style.backgroundSize = `135px 45px`

        this.enemy2Element.style.overflow = "hidden"
        this.enemy2Element.style.backgroundRepeat = "no-repeat"
        this.enemy2Element.style.backgroundPositionX = "0px"


        this.gameScreen.appendChild(this.enemy2Element)

    }

    move(framesIndex) {

        this.enemy2Pos.left -= this.enemy2Vel.left
        //if (this.enemy2Pos.top < this.gameSize.h / 2) {
        this.enemy2Pos.top -= 2
        //} else {
        //this.enemy2Pos.top -= 2
        // }
        this.animateSprite(framesIndex)
        this.updatePosition()

    }
    animateSprite(framesIndex) {

        if (framesIndex % this.enemySprite.framseSpeed == 0) {
            this.enemySprite.currentFrame++

        }
        if (this.enemySprite.currentFrame >= this.enemySprite.totalFrames) {
            this.enemySprite.currentFrame = 0

        }
        this.enemySprite.backgroundPositionX = -this.enemy2Size.w * this.enemySprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.enemy2Element.style.backgroundPositionX = `${this.enemySprite.backgroundPositionX}px`
    }

    updatePosition() {
        this.enemy2Element.style.left = `${this.enemy2Pos.left}px`
        this.enemy2Element.style.top = `${this.enemy2Pos.top}px`
    }

}