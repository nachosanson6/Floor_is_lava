class Key {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.keySize = {
            w: 35,
            h: 50
        }

        this.keyPos = {
            left: 1460,
            top: 60
        }
        this.init()
    }

    init() {

        this.keyElement = document.createElement('div')

        this.keyElement.style.position = "absolute"
        this.keyElement.style.backgroundImage = `url(./Images/key.png)`
        this.keyElement.style.backgroundSize = "cover"
        this.keyElement.style.width = `${this.keySize.w}px`
        this.keyElement.style.height = `${this.keySize.h}px`
        this.keyElement.style.left = `${this.keyPos.left}px`
        this.keyElement.style.top = `${this.keyPos.top}px`





        this.gameScreen.appendChild(this.keyElement)
    }
}