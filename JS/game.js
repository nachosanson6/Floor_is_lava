const Game = {
    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    frameCounter: 0,

    player: undefined,
    elevatorPlatforms: [],
    elevatorPlatformsUp: [],
    fixedPlatforms: undefined,
    movingPlatforms: undefined,

    keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', UP: 'ArrowUp', DOWN: 'ArrowDown', SPACE: 'Space' },

    elevatorPlatformsDensity: 100,
    platformsDistance: 3,
    collision: "",

    init() {
        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    start() {

        this.createElement()
        this.setEventListeners()
        this.gameLoop()
    },

    setEventListeners() {
        document.onkeydown = event => {
            switch (event.code) {
                case this.keys.LEFT:
                    this.player.moveLeft()
                    break;

                case this.keys.RIGHT:
                    this.player.moveRight()
                    break;

                // case this.keys.UP:
                //     this.player.moveUp()
                //     break;

                // case this.keys.DOWN:
                //     this.player.moveDown()
                //     break;

                case this.keys.SPACE:
                    this.player.jump()
                    break;
            }

        }
    },


    createElement() {
        this.player = new Player(this.gameScreen, this.gameSize, this.collision)
        this.elevatorPlatforms = []
        this.elevatorPlatformsUp = []
        this.fixedPlatforms = new FixedPlatform(this.gameScreen, this.gameSize, this.playerPos, this.playerSize)
        this.movingPlatforms = new MovingPlatform(this.gameScreen, this.gameSize, this.playerPos, this.playerSize)
    },

    gameLoop() {
        this.frameCounter > 5000 ? this.frameCounter = 0 : this.frameCounter++
        this.drawAll()
        this.clearAll()
        this.isCollision()
        this.generateElevatorPlatforms()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    drawAll() {
        this.player.move()
        this.elevatorPlatforms.forEach(Plat => Plat.move())
        this.elevatorPlatformsUp.forEach(Plat => Plat.move())
        this.movingPlatforms.move()

    },
    generateElevatorPlatforms() {
        if (this.frameCounter % this.elevatorPlatformsDensity === 0) {
            this.elevatorPlatforms.push(new ElevatorPlatforms(this.gameScreen, this.gameSize, this.player.playerPos, this.player.playerSize))
            this.elevatorPlatformsUp.push(new ElevatorPlatformsUp(this.gameScreen, this.gameSize, this.player.playerPos, this.player.playerSize))
        }
    },

    clearAll() {
        //LIMPIA EL ARRAY DE PLATAFORMAS QUE BAJAN
        this.elevatorPlatforms.forEach((eachElevatorPlatforms, idx) => {
            if (eachElevatorPlatforms.elevatorPlatformsPos.top > this.gameSize.h) {
                eachElevatorPlatforms.elevatorPlatformsElement.remove()
                this.elevatorPlatforms.splice(idx, 1)

            }
        })
        //LIMPIA EL ARRAY DE PLATAFORMAS QUE SUBEN
        this.elevatorPlatformsUp.forEach((eachElevatorPlatformsUp, idx) => {
            if (eachElevatorPlatformsUp.elevatorPlatformsUpPos.top < 0) {
                eachElevatorPlatformsUp.elevatorPlatformsUpElement.remove()
                this.elevatorPlatformsUp.splice(idx, 1)

            }
        })
    },

    isCollision() {
        //DETECTA LA PLATAFORMA INICIAL
        // PROBAR A PONER === CUANDO QUERAMOS QUE EL PLAYER ESTÉ SOBRE LA PLATFORM, EN VEZ DE <= O >=

        if (
            this.player.playerPos.left < this.fixedPlatforms.fixedPlatformsPos.left + this.fixedPlatforms.fixedPlatformsSize.w &&
            this.player.playerPos.top + this.player.playerSize.h <= this.fixedPlatforms.fixedPlatformsPos.top &&
            this.player.playerPos.top + this.player.playerSize.h >= this.fixedPlatforms.fixedPlatformsPos.top - this.platformsDistance
        ) {
            console.log("estoy encima")

            this.player.playerVel.top = -0.1


        }
        else {
            this.player.playerPos.base = this.gameSize.h - this.player.playerSize.h

        }
        //DETECTA LA COLISIÓN CON LAS PLATAFORMAS QUE BAJAN
        for (let i = 0; i < this.elevatorPlatforms.length; i++) {

            if (
                this.player.playerPos.left + this.player.playerSize.w >=
                this.elevatorPlatforms[i].elevatorPlatformsPos.left &&

                this.player.playerPos.left <=
                this.elevatorPlatforms[i].elevatorPlatformsPos.left + this.elevatorPlatforms[i].elevatorPlatformsSize.w &&

                this.player.playerPos.top + this.player.playerSize.h >=
                this.elevatorPlatforms[i].elevatorPlatformsPos.top - this.platformsDistance &&

                this.player.playerPos.top + this.player.playerSize.h <=
                this.elevatorPlatforms[i].elevatorPlatformsPos.top
            ) {
                console.log("estoy bajando")

                this.player.playerVel.top = this.elevatorPlatforms[i].elevatorPlatformsVel.top - 0.1

            }
        }
        //DETECTA LA COLISIÓN CON LAS PLATAFORMAS QUE SUBEN
        for (let i = 0; i < this.elevatorPlatformsUp.length; i++) {
            if (
                this.player.playerPos.left + this.player.playerSize.w >=
                this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.left &&

                this.player.playerPos.left <=
                this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.left + this.elevatorPlatformsUp[i].elevatorPlatformsUpSize.w &&

                this.player.playerPos.top + this.player.playerSize.h >=
                this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.top - this.platformsDistance &&

                this.player.playerPos.top + this.player.playerSize.h <=
                this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.top
            ) {
                this.player.playerVel.top = (this.elevatorPlatformsUp[i].elevatorPlatformsUpVel.top + 0.1) * -1
            }
        }

        //DETECTA LA COLISIÓN CON LA PLATAFORMA MÓVIL
        // if (
        //     this.player.playerPos.top + this.player.playerSize.h ===
        //     this.movingPlatforms.movingPlatformsPos.top &&

        //     this.player.playerPos.left <=
        //     this.movingPlatforms.movingPlatformsPos.left + this.movingPlatforms.movingPlatformsSize.w &&

        //     this.player.playerPos.left + this.player.playerSize.w >=
        //     this.movingPlatforms.movingPlatformsPos.left
        // )





    }


}