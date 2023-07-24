class Player {
    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;



        this.playerSize = {
            w: 100,
            h: 100
        }

        this.playerPos = {
            left: 30,
            top: 200 - this.playerSize.h,      //REVISAR LAS MEDIDAS
            base: 100
        }
        this.playerVel = {
            left: 20,
            top: 50,
            gravity: .05
        }
        this.init()
    }

    init() {

        this.playerElement = document.createElement('img')
        this.playerElement.src = "./images/images.png"

        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`


        this.gameScreen.appendChild(this.playerElement)
    }
    move() {
        this.checkBorderCollision()

        if (this.playerPos.top < this.playerPos.base) {
            this.playerVel.top += this.playerVel.gravity;   // está saltando!
            this.playerPos.top += this.playerVel.top;

        } else {
            // this.playerPos.top = this.playerPos.base;
            this.playerVel.top = 1;
        }


        this.updatePosition()
    }

    moveLeft() {
        this.playerPos.left -= this.playerVel.left
    }

    moveRight() {
        this.playerPos.left += this.playerVel.left
    }

    jumpRight() {

    }
    // moveUp() {
    //     this.playerPos.top -= this.playerVel.top
    // }

    // moveDown() {
    //     this.playerPos.top += this.playerVel.top
    // }

    jump() {
        this.playerPos.top -= 150
        // this.playerPos.left += this.playerVel.left
        // this.playerVel.top += this.playerVel.gravity    // <--
        // this.playerPos.top += this.playerVel.top
        // this.playerVel.left += this.playerVel.gravity    // <--
        // this.playerPos.left += this.playerVel.left 

    }


    checkBorderCollision() {
        if (this.playerPos.top >= this.gameSize.h - this.playerSize.h) {
            this.playerPos.top = this.gameSize.h - this.playerSize.h
        } else if (this.playerPos.top <= 0) {
            this.playerPos.top = 0
        } else if (this.playerPos.left > this.gameSize.w - this.playerSize.w) {
            this.playerPos.left = this.gameSize.w - this.playerSize.w
        } else if (this.playerPos.left <= 0) {
            this.playerPos.left = 0
        }

    }


    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`
    }
}   