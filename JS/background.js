class BackGround {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;


        this.fixedPlatformsSize = {
            w: gameSize.w,
            h: gameSize.h
        }
        this.fixedPlatformsPos = {
            left: 0,
            top: 0
        }

        this.init()
    }

    init() {

        this.fixedPlatformsElement = document.createElement('div')

        this.fixedPlatformsElement.style.position = 'absolute'
        this.fixedPlatformsElement.style.backgroundImage = `url(./Images/fondodef.jpg)`
        this.fixedPlatformsElement.style.backgroundSize = "cover"
        this.fixedPlatformsElement.style.width = `${this.fixedPlatformsSize.w}px`
        this.fixedPlatformsElement.style.height = `${this.fixedPlatformsSize.h}px`
        this.fixedPlatformsElement.style.left = `${this.fixedPlatformsPos.left}px`
        this.fixedPlatformsElement.style.top = `${this.fixedPlatformsPos.top}px`




        this.gameScreen.appendChild(this.fixedPlatformsElement)
    }
}