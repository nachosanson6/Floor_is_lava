class FixedWall1 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.fixedWall1Size = {
            w: 20,
            h: 700
        }
        this.fixedWall1Pos = {
            left: 340,
            top: this.gameSize.h / 2 + 250
        }

        this.init()
    }

    init() {

        this.fixedWall1Element = document.createElement('div')

        this.fixedWall1Element.style.position = 'absolute'
        this.fixedWall1Element.style.width = `${this.fixedWall1Size.w}px`
        this.fixedWall1Element.style.height = `${this.fixedWall1Size.h}px`
        this.fixedWall1Element.style.left = `${this.fixedWall1Pos.left}px`
        this.fixedWall1Element.style.top = `${this.fixedWall1Pos.top}px`
        this.fixedWall1Element.style.backgroundColor = '#BA7A4B '



        this.gameScreen.appendChild(this.fixedWall1Element)
    }
}