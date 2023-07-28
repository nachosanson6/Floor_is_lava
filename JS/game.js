const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    frameCounter: 0,
    framesIndex: 0,
    player: undefined,
    elevatorPlatforms: [],
    elevatorPlatformsUp: [],
    fixedWall1: [],
    fixedPlatforms: [],
    movingPlatforms: [],
    lava: undefined,
    enemy2: [],
    backGround: undefined,

    keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', UP: 'ArrowUp', DOWN: 'ArrowDown', SPACE: 'Space' },

    elevatorPlatformsDensity: 100,
    enemiesDensity: 40,
    platformsDistance: 4,
    collision: "",

    laRosalia: document.querySelector('#Rosalia'),
    win: document.querySelector('#win'),
    loseAudio: document.querySelector('#loseAudio'),
    winAudio: document.querySelector("#winAudio"),


    init() {
        this.setDimensions()
        this.start()

    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
        this.gameScreen.style.backgroundImage = `url(./Images/fondo.png)`
        this.gameScreen.style.backgroundSize = "cover"
    },

    start() {

        this.createElement()
        this.setEventListeners()
        this.gameLoop()
    },

    setEventListeners() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case this.keys.LEFT:
                    this.player.playerElement.style.backgroundImage = `url(./Images/peachReves.png)`
                    this.player.moveLeft()
                    //new code:
                    this.player.setHorizontalMovement(-1)
                    //hasta aquí

                    break;

                case this.keys.RIGHT:
                    this.player.playerElement.style.backgroundImage = `url(./Images/PrincessPeach.png)`
                    this.player.moveRight()
                    //new code:
                    this.player.setHorizontalMovement(1)
                    //hasta aquí

                    break;


                case this.keys.SPACE:
                    this.player.jump()
                    break;

            }

        });
        //new code:
        document.addEventListener('keyup', event => {
            switch (event.code) {
                case this.keys.LEFT:
                case this.keys.RIGHT:
                    // Stop horizontal movement when the left or right key is released
                    this.player.stopMovingHorizontal();
                    break;
            }
        });
    },
    //hasta aquí

    createElement() {
        this.backGround = new BackGround(this.gameScreen, this.gameSize,)
        this.elevatorPlatforms = []
        this.elevatorPlatformsUp = []
        this.enemy2 = []
        this.key = new Key(this.gameScreen, this.gameSize,)
        this.fixedWall1.push(new FixedWall1(this.gameScreen, this.gameSize, 20, 430, 340, 0)) //izquierda arriba w/h/l/t
        this.fixedWall1.push(new FixedWall1(this.gameScreen, this.gameSize, 20, this.gameSize.h / 2.5 - 25, 1140, 150))// derecha
        this.fixedWall1.push(new FixedWall1(this.gameScreen, this.gameSize, 20, 100, 340, 650))//izquierda abajo
        this.fixedPlatforms.push(new FixedPlatform(this.gameScreen, this.gameSize, 90, 650, 0, 200)) //primera
        this.fixedPlatforms.push(new FixedPlatform(this.gameScreen, this.gameSize, 100, 20, 1440, 120)) //segunda
        this.fixedPlatforms.push(new FixedPlatform(this.gameScreen, this.gameSize, 150, 20, 360, 120)) //plataforma para la puerta
        this.movingPlatforms.push(new MovingPlatform(this.gameScreen, this.gameSize, this.gameSize.w - 700, 650, 4))
        this.movingPlatforms.push(new MovingPlatform(this.gameScreen, this.gameSize, this.gameSize.w - 1000, 200, 6))
        this.lava = new Lava(this.gameScreen, this.gameSize, this.playerPos, this.playerSize)
        this.door = new Door(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize, this.collision)
    },

    gameLoop() {
        this.frameCounter > 5000 ? this.frameCounter = 0 : this.frameCounter++
        this.drawAll()
        this.clearAll()
        this.incrementFrames()
        this.generateElevatorPlatforms()
        this.generateEnemies()
        this.isCollision()

        //new code:
        this.player.move()

        //hasta aquí
        window.requestAnimationFrame(() => this.gameLoop())
    },
    incrementFrames() {
        this.framesIndex > 5000 ? this.framesIndex = 0 : this.framesIndex++

    },

    drawAll() {
        console.log("draw")
        this.laRosalia.play()
        this.player.move(this.framesIndex)
        this.elevatorPlatforms.forEach(Plat => Plat.move())
        this.elevatorPlatformsUp.forEach(Plat => Plat.move())
        this.movingPlatforms.forEach(platform => platform.move())
        this.enemy2.forEach(eachEnemy => eachEnemy.move(this.framesIndex))


    },
    generateElevatorPlatforms() {
        if (this.frameCounter % this.elevatorPlatformsDensity === 0) {
            this.elevatorPlatforms.push(new ElevatorPlatforms(this.gameScreen, this.gameSize, this.player.playerPos, this.player.playerSize))
            this.elevatorPlatformsUp.push(new ElevatorPlatformsUp(this.gameScreen, this.gameSize, this.player.playerPos, this.player.playerSize))

        }
    },

    generateEnemies() {
        if (this.frameCounter % this.enemiesDensity === 0) {
            this.enemy2.push(new Enemy2(this.gameScreen, this.gameSize))
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
        this.enemy2.forEach((enemy, idx) => {
            if (enemy.enemy2Pos.left < 0) {
                enemy.enemy2Element.remove()
                this.enemy2.splice(idx, 1)
            }
        })
    },

    isCollision() {
        //DETECTA LA PLATAFORMA INICIAL
        this.fixedPlatforms.forEach((eachPlatform) => {
            if (this.player.playerPos.left < eachPlatform.fixedPlatformsPos.left + eachPlatform.fixedPlatformsSize.w &&
                this.player.playerPos.left + this.player.playerSize.w > eachPlatform.fixedPlatformsPos.left &&
                this.player.playerPos.top < eachPlatform.fixedPlatformsPos.top + eachPlatform.fixedPlatformsSize.h &&
                this.player.playerSize.h + this.player.playerPos.top > eachPlatform.fixedPlatformsPos.top) {


                this.player.isJumping = false
                this.player.playerVel.top = -0.1
                this.player.playerPos.top = eachPlatform.fixedPlatformsPos.top - this.player.playerSize.h

            }
            else {
                this.player.playerPos.base = this.gameSize.h - this.player.playerSize.h

            }
            //DETECTA LA PARED DE LA  PLATAFORMA INICIAL
            if (
                this.player.playerPos.top + this.player.playerSize.h - 1 >= eachPlatform.fixedPlatformsPos.top &&
                this.player.playerPos.left <= eachPlatform.fixedPlatformsPos.left + eachPlatform.fixedPlatformsSize.w &&
                this.player.playerPos.left + this.player.playerSize.w >= eachPlatform.fixedPlatformsPos.left &&
                this.player.playerPos.top + this.player.playerSize.h <= eachPlatform.fixedPlatformsSize.w
            ) {
                this.player.playerPos.left = eachPlatform.fixedPlatformsPos.left + eachPlatform.fixedPlatformsSize.w
            }
        })
        //DETECTA LA COLISIÓN CON LAS PLATAFORMAS QUE BAJAN
        for (let i = 0; i < this.elevatorPlatforms.length; i++) {

            if (this.player.playerPos.left < this.elevatorPlatforms[i].elevatorPlatformsPos.left + this.elevatorPlatforms[i].elevatorPlatformsSize.w &&
                this.player.playerPos.left + this.player.playerSize.w > this.elevatorPlatforms[i].elevatorPlatformsPos.left &&
                this.player.playerPos.top < this.elevatorPlatforms[i].elevatorPlatformsPos.top - this.elevatorPlatforms[i].elevatorPlatformsSize.h &&
                this.player.playerSize.h + this.player.playerPos.top > this.elevatorPlatforms[i].elevatorPlatformsPos.top) {
                this.player.playerVel.top = 0
                this.player.isJumping = false
                this.player.playerPos.top = this.elevatorPlatforms[i].elevatorPlatformsPos.top - this.player.playerSize.h
            }

        }
        //DETECTA LA COLISIÓN CON LAS PLATAFORMAS QUE SUBEN
        for (let i = 0; i < this.elevatorPlatformsUp.length; i++) {
            if (this.player.playerPos.left < this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.left + this.elevatorPlatformsUp[i].elevatorPlatformsUpSize.w &&
                this.player.playerPos.left + this.player.playerSize.w > this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.left &&
                this.player.playerPos.top < this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.top - this.elevatorPlatformsUp[i].elevatorPlatformsUpSize.h &&
                this.player.playerSize.h + this.player.playerPos.top > this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.top) {
                this.player.isJumping = false
                // this.player.playerVel.gravity = 0
                //this.player.playerPos.top = this.elevatorPlatformsUp[i].elevatorPlatformsUpPos.top - this.player.playerSize.h

                this.player.playerVel.top = (this.elevatorPlatformsUp[i].elevatorPlatformsUpVel.top) * -1

            }
        }

        //DETECTA LA COLISIÓN CON LA PLATAFORMA MÓVIL
        this.movingPlatforms.forEach((movingPlatform) => {
            if (this.player.playerPos.left < movingPlatform.movingPlatformsPos.left + movingPlatform.movingPlatformsSize.w &&
                this.player.playerPos.left + this.player.playerSize.w > movingPlatform.movingPlatformsPos.left &&
                this.player.playerPos.top < movingPlatform.movingPlatformsPos.top - movingPlatform.movingPlatformsSize.h &&
                this.player.playerSize.h + this.player.playerPos.top > movingPlatform.movingPlatformsPos.top) {

                this.player.isJumping = false
                this.player.playerVel.top = -0.1
                this.player.playerPos.left += movingPlatform.movingPlatformsVel.left


            }
        })

        //DETECTA LA COLISIÓN CON PARADES FIJAS
        this.fixedWall1.forEach((eachWall) => {
            if (this.player.playerPos.left + this.player.playerSize.w >= eachWall.fixedWall1Pos.left &&
                this.player.playerPos.left <= eachWall.fixedWall1Pos.left &&
                this.player.playerPos.top + this.player.playerSize.h >= eachWall.fixedWall1Pos.top &&
                this.player.playerPos.top <= eachWall.fixedWall1Pos.top + eachWall.fixedWall1Size.h) {

                this.player.playerPos.left = eachWall.fixedWall1Pos.left - this.player.playerSize.w
            }

            if (this.player.playerPos.left <= eachWall.fixedWall1Pos.left + eachWall.fixedWall1Size.w &&
                this.player.playerPos.left >= eachWall.fixedWall1Pos.left &&
                this.player.playerPos.top + this.player.playerSize.h >= eachWall.fixedWall1Pos.top &&
                this.player.playerPos.top <= eachWall.fixedWall1Pos.top + eachWall.fixedWall1Size.h) {

                this.player.playerPos.left = eachWall.fixedWall1Pos.left + eachWall.fixedWall1Size.w
            }
        })
        //Detecta la colision con la llave
        if (
            this.player.playerPos.top + this.player.playerSize.h >= this.key.keyPos.top &&
            this.player.playerPos.left <= this.key.keyPos.left + this.key.keySize.w &&
            this.player.playerPos.left + this.player.playerSize.w >= this.key.keyPos.left) {
            this.keyDoor()
        }



        //Detecta la colisión con la lava
        if (this.player.playerPos.top + this.player.playerSize.h >= this.lava.lavaPos.top) {
            console.log("LOSSING")
            document.querySelector('#lose').style.display = "block"

            this.laRosalia.pause()
            this.loseAudio.play()



        }

        //Detecta la colisión con la puerta
        if (
            this.player.playerPos.left < this.door.doorPos.left + this.door.doorSize.w &&
            this.player.playerPos.left + this.player.playerSize.w > this.door.doorPos.left &&
            this.player.playerPos.top < this.door.doorPos.top + this.door.doorSize.h &&
            this.player.playerPos.top + this.player.playerSize.h > this.door.doorPos.top
        ) {

            document.querySelector('#win').style.display = "block"
            console.log(this.laRosalia)
            this.laRosalia.pause()
            this.winAudio.play()
            this.winAudio.volume = 1



        }

        //Detecta colisión con los enemigos
        this.enemy2.forEach((eachEnemy) => {
            if (

                this.player.playerPos.left < eachEnemy.enemy2Pos.left + eachEnemy.enemy2Size.w &&
                this.player.playerPos.left + this.player.playerSize.w > eachEnemy.enemy2Pos.left &&
                this.player.playerPos.top < eachEnemy.enemy2Pos.top + eachEnemy.enemy2Size.h &&
                this.player.playerPos.top + this.player.playerSize.h > eachEnemy.enemy2Pos.top
            ) {

                this.player.playerPos.left -= 15

            }
        })



    },
    //DETECTA LA COLISION CON LA LLAVE Y CREA LA PUERTA
    keyDoor() {
        this.door.doorElement.style.display = "block"
        this.key.keyElement.remove()

        //Detecta la colisión con la puerta
        //this.win()

    },


}