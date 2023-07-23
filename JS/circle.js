class Circle {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.circleSize = {
            w: 300,
            h: 300
        }

        this.circlePos = {
            left: gameSize.w / 2 - this.circleSize.w / 2,
            top: gameSize.h / 2 - this.circleSize.h / 2
        }

        this.init()
    }

    init() {

        this.circleElement = document.createElement('div')

        this.circleElement.style.position = "absolute"
        this.circleElement.style.width = `${this.circleSize.w}px`
        this.circleElement.style.height = `${this.circleSize.h}px`
        this.circleElement.style.left = `${this.circlePos.left}px`
        this.circleElement.style.top = `${this.circlePos.top}px`
        this.circleElement.style.backgroundColor = `red`
        this.circleElement.style.borderRadius = `50%`
        console.log("que coño pasa")

        this.gameScreen.appendChild(this.circleElement)
    }
}