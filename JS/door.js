class Door {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.doorSize = {
            w: 110,
            h: 110
        }

        this.doorPos = {
            left: 380,
            top: 9.5
        }
        this.init()
    }

    init() {

        this.doorElement = document.createElement('div')

        this.doorElement.style.position = "absolute"
        this.doorElement.style.backgroundImage = `url(./Images/castillo.png)`
        this.doorElement.style.backgroundSize = "cover"
        this.doorElement.style.width = `${this.doorSize.w}px`
        this.doorElement.style.height = `${this.doorSize.h}px`
        this.doorElement.style.left = `${this.doorPos.left}px`
        this.doorElement.style.top = `${this.doorPos.top}px`

        this.doorElement.style.display = "none"




        this.gameScreen.appendChild(this.doorElement)
    }
}