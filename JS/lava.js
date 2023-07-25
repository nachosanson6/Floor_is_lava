class Lava {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.lavaSize = {
            w: this.gameSize.w,
            h: 100
        }
        this.lavaPos = {
            left: 0,
            top: this.gameSize.h - 50
        }

        this.init()
    }

    init() {

        this.lavaElement = document.createElement('div')

        this.lavaElement.style.position = 'absolute'
        this.lavaElement.style.width = `${this.lavaSize.w}px`
        this.lavaElement.style.height = `${this.lavaSize.h}px`
        this.lavaElement.style.left = `${this.lavaPos.left}px`
        this.lavaElement.style.top = `${this.lavaPos.top}px`
        this.lavaElement.style.backgroundColor = 'red '



        this.gameScreen.appendChild(this.lavaElement)
    }
}