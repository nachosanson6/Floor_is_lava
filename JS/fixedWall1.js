class FixedWall1 {

    constructor(gameScreen, gameSize, width, height, left, top) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.fixedWall1Size = {
            w: width,
            h: height
        }
        this.fixedWall1Pos = {
            left: left,
            top: top
        }

        this.init()
    }

    init() {

        this.fixedWall1Element = document.createElement('div')

        this.fixedWall1Element.style.position = 'absolute'
        this.fixedWall1Element.style.backgroundImage = `url(./Images/piedra.png)`
        this.fixedWall1Element.style.backgroundSize = "none"
        this.fixedWall1Element.style.width = `${this.fixedWall1Size.w}px`
        this.fixedWall1Element.style.height = `${this.fixedWall1Size.h}px`
        this.fixedWall1Element.style.left = `${this.fixedWall1Pos.left}px`
        this.fixedWall1Element.style.top = `${this.fixedWall1Pos.top}px`
        this.fixedWall1Element.style.backgroundColor = '#BA7A4B '



        this.gameScreen.appendChild(this.fixedWall1Element)
    }
}