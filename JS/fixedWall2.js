class FixedWall2 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.fixedWall2Size = {
            w: 20,
            h: this.gameSize.h / 2 + 50
        }
        this.fixedWall2Pos = {
            left: 340,
            top: 90
        }

        this.init()
    }

    init() {

        this.fixedWall2Element = document.createElement('div')

        this.fixedWall2Element.style.position = 'absolute'
        this.fixedWall2Element.style.width = `${this.fixedWall2Size.w}px`
        this.fixedWall2Element.style.left = `${this.fixedWall2Pos.left}px`
        this.fixedWall2Element.style.top = `${this.fixedWall2Pos.top}px`
        this.fixedWall2Element.style.backgroundColor = '#BA7A4B '
        this.fixedWall2Element.style.height = `${this.fixedWall2Size.h}px`



        this.gameScreen.appendChild(this.fixedWall2Element)
    }
}

class FixedWall3 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;

        this.fixedWall3Size = {
            w: 20,
            h: this.gameSize.h / 2
        }
        this.fixedWall3Pos = {
            left: 1140,
            top: 150
        }

        this.init()
    }

    init() {

        this.fixedWall3Element = document.createElement('div')

        this.fixedWall3Element.style.position = 'absolute'
        this.fixedWall3Element.style.width = `${this.fixedWall3Size.w}px`
        this.fixedWall3Element.style.left = `${this.fixedWall3Pos.left}px`
        this.fixedWall3Element.style.top = `${this.fixedWall3Pos.top}px`
        this.fixedWall3Element.style.backgroundColor = '#BA7A4B '
        this.fixedWall3Element.style.height = `${this.fixedWall3Size.h}px`



        this.gameScreen.appendChild(this.fixedWall3Element)
    }
}

