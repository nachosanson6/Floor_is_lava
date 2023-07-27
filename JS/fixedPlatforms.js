class FixedPlatform {

    constructor(gameScreen, gameSize, width, height, left, top,) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;


        this.fixedPlatformsSize = {
            w: width,
            h: height
        }
        this.fixedPlatformsPos = {
            left: left,
            top: top
        }

        this.init()
    }

    init() {

        this.fixedPlatformsElement = document.createElement('div')

        this.fixedPlatformsElement.style.position = 'absolute'
        this.fixedPlatformsElement.style.backgroundImage = `url(./Images/piedra.png)`
        this.fixedPlatformsElement.style.backgroundSize = "none"
        this.fixedPlatformsElement.style.width = `${this.fixedPlatformsSize.w}px`
        this.fixedPlatformsElement.style.height = `${this.fixedPlatformsSize.h}px`
        this.fixedPlatformsElement.style.left = `${this.fixedPlatformsPos.left}px`
        this.fixedPlatformsElement.style.top = `${this.fixedPlatformsPos.top}px`
        this.fixedPlatformsElement.style.backgroundColor = '#BA7A4B '



        this.gameScreen.appendChild(this.fixedPlatformsElement)
    }
}