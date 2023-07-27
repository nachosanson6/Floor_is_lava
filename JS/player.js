class Player {
    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.isJumping = false;
        //new code :
        this.isMovingLeft = false;
        this.isMovingRight = false;

        this.horizontalMovement = 0;
        this.verticalMovement = 0;

        this.isMoving = false;
        //hasta aquí




        this.playerSize = {
            w: 50,
            h: 50
        }

        this.playerPos = {
            left: 10,
            top: 150 - this.playerSize.h,
            base: 100
        }
        this.playerVel = {
            left: 2,
            top: 25,
            gravity: .05
        }
        this.playerBackgroundPos = {
            x: 0,
            y: 0
        }
        this.playerSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            framseSpeed: 4
        }




        this.init()

    }
    //new code :
    setHorizontalMovement(value) {
        this.horizontalMovement = value;
        this.isMoving = value !== 0 ? true : false;

        if (!this.isMoving) {
            this.updateSprite();
        }

    }

    setVerticalMovement(value) {
        this.verticalMovement = value;
    }

    stopMovingHorizontal() {
        this.horizontalMovement = 0;
    }
    //hasta aquí

    init() {

        this.playerElement = document.createElement('div')

        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`

        this.playerElement.style.backgroundImage = `url(./Images/PrincessPeach.png)`
        this.playerElement.style.backgroundSize = `300px 50px`

        this.playerElement.style.overflow = "hidden"
        this.playerElement.style.backgroundRepeat = "no-repeat"
        this.playerElement.style.backgroundPositionX = "0px"

        this.gameScreen.appendChild(this.playerElement)
    }
    move(framesIndex) {

        this.checkBorderCollision()


        if (this.playerPos.top < this.playerPos.base) {
            this.playerVel.top += this.playerVel.gravity;   // está saltando!
            this.playerPos.top += this.playerVel.top;

        } else {
            // this.playerPos.top = this.playerPos.base;
            this.playerVel.top = 1;
        }

        // New code: Combine horizontal and vertical movements
        this.playerPos.left += this.horizontalMovement * this.playerVel.left;
        this.playerPos.top -= this.verticalMovement * this.playerVel.top;


        if (this.horizontalMovement !== 0) {
            this.animateSprite(framesIndex);
        } else {
            // If not moving, set the sprite to its static position
            this.playerSprite.currentFrame = 1;
            this.playerSprite.backgroundPositionX = -this.playerSize.w;
            this.updateSprite();
        }

        this.updatePosition()
        //}
    }

    moveLeft() {
        this.playerPos.left -= this.playerVel.left
        //new code:
        if (this.isMovingLeft === false) {
            this.isMovingLeft = true
            this.player.setHorizontalMovement(0.001); // Move to the left
            this.player.setVerticalMovement(0.5); // Move upwards

            //     //hasta aquí
        }
    }



    moveRight() {
        this.playerPos.left += this.playerVel.left
        //new code:
        if (this.isMovingRight === false) {
            this.isMovingRight = true
            this.player.setHorizontalMovement(-0.001); // Move to the right
            this.player.setVerticalMovement(-0.);
            this.playerVel.gravity = 4
            this.playerElement.style.backgroundImage = `url(./Images/PrincessPeach.png)`
            // Move upwards
            //hasta aquí
        }
    }

    jump() {
        if (this.isJumping === false) { //&& this.player.playerPos.top > 0 && this.player.playerPos.top + this - this.playerSize.h < this.gameSize.h) {
            this.isJumping = true

            for (let i = 0; i < 10; i++) {
                this.playerPos.top -= 0.5
                this.playerVel.top -= 0.5;

            }
        }
    }



    checkBorderCollision() {

        if (this.playerPos.top >= this.gameSize.h - this.playerSize.h) {
            this.isJumping = false  //Habra que quitarlo ya que no queremos saltar cuando este en la lava
            this.playerPos.top = this.gameSize.h - this.playerSize.h
        } else if (this.playerPos.top <= 2) {
            console.log("borde superior")
            this.playerPos.top = 2
            this.playerVel.top = 0
        } else if (this.playerPos.left > this.gameSize.w - this.playerSize.w) {
            this.playerPos.left = this.gameSize.w - this.playerSize.w
        } else if (this.playerPos.left <= 0) {
            this.playerPos.left = 0
        }

    }
    animateSprite(framesIndex) {

        if (framesIndex % this.playerSprite.framseSpeed == 0) {
            this.playerSprite.currentFrame++

        }
        if (this.playerSprite.currentFrame >= this.playerSprite.totalFrames) {
            this.playerSprite.currentFrame = 0

        }
        this.playerSprite.backgroundPositionX = -this.playerSize.w * this.playerSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        if (this.isMoving) {
            this.playerElement.style.backgroundPositionX = `${this.playerSprite.backgroundPositionX}px`;
        } else {
            // aquí metemos la posición por defecto del sprite de la princesa cuando no hay movimiento
            this.playerElement.style.backgroundPositionX = "0px";
        }

    }


    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`
    }
}

