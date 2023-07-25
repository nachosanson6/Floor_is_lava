class FixedPlatform {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.fixedPlatformsSize = {
            w: 90,
            h: 600
        }
        this.fixedPlatformsPos = {
            left: 0,
            top: 200
        }

        this.init()
    }

    init() {

        this.fixedPlatformsElement = document.createElement('div')

        this.fixedPlatformsElement.style.position = 'absolute'
        this.fixedPlatformsElement.style.width = `${this.fixedPlatformsSize.w}px`
        this.fixedPlatformsElement.style.height = `${this.fixedPlatformsSize.h}px`
        this.fixedPlatformsElement.style.left = `${this.fixedPlatformsPos.left}px`
        this.fixedPlatformsElement.style.top = `${this.fixedPlatformsPos.top}px`
        this.fixedPlatformsElement.style.backgroundColor = '#BA7A4B '



        this.gameScreen.appendChild(this.fixedPlatformsElement)
    }
}