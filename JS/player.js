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
        //hasta aquí




        this.playerSize = {
            w: 50,
            h: 50
        }

        this.playerPos = {
            left: 10,
            top: 200 - this.playerSize.h,
            base: 100
        }
        this.playerVel = {
            left: 4,
            top: 100,
            gravity: .05
        }
        this.init()

    }
    //new code :
    setHorizontalMovement(value) {
        this.horizontalMovement = value;
    }

    setVerticalMovement(value) {
        this.verticalMovement = value;
    }

    stopMovingHorizontal() {
        this.horizontalMovement = 0;
    }
    //hasta aquí

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

        // New code: Combine horizontal and vertical movements
        this.playerPos.left += this.horizontalMovement * this.playerVel.left;
        this.playerPos.top -= this.verticalMovement * this.playerVel.top;


        //if(this.ismovingleft)

        this.updatePosition()
        //}
    }

    moveLeft() {
        this.playerPos.left -= this.playerVel.left
        //new code:
        if (this.isMovingLeft === false) {
            this.isMovingLeft = true
            this.player.setHorizontalMovement(0.2); // Move to the left
            this.player.setVerticalMovement(3); // Move upwards

            //     //hasta aquí
        }
    }



    moveRight() {
        this.playerPos.left += this.playerVel.left
        //new code:
        if (this.isMovingRight === false) {
            this.isMovingRight = true
            this.player.setHorizontalMovement(-0.2); // Move to the right
            this.player.setVerticalMovement(-3);
            this.playerVel.gravity = 4
            // Move upwards
            //hasta aquí
        }
    }

    jump() {
        if (this.isJumping === false) {
            this.isJumping = true

            for (let i = 0; i < 10; i++) {
                this.playerPos.top -= 1
                this.playerVel.top -= 0.5;

            }
        }
    }



    checkBorderCollision() {

        if (this.playerPos.top >= this.gameSize.h - this.playerSize.h) {
            this.isJumping = false  //Habra que quitarlo ya que no queremos saltar cuando este en la lava
            this.playerPos.top = this.gameSize.h - this.playerSize.h
        } else if (this.playerPos.top <= 2) {
            this.playerPos.top = 2
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

