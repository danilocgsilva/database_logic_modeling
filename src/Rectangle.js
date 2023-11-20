class Rectangle {

    constructor() {
        this.params = {
            x: 50,
            y: 150,
            width: 100,
            height: 50
        }
        this.draw()

    }

    moveUp() {
        this.ctx2.clearRect(
            this.params.x,
            this.params.y,
            this.canvas.width, 
            this.canvas.height
        )

        this.params.y -= 10

        this.draw()
    }

    moveDown() {
        this.ctx2.clearRect(
            this.params.x,
            this.params.y,
            this.canvas.width, 
            this.canvas.height
        )

        this.params.y += 10

        this.draw()
    }

    moveLeft() {
        console.log("foi")

        this.ctx2.clearRect(
            this.params.x,
            this.params.y,
            this.canvas.width, 
            this.canvas.height
        )

        this.params.x += 10

        this.draw() 
    }

    moveRight() {
        console.log("foi")

        this.ctx2.clearRect(
            this.params.x,
            this.params.y,
            this.canvas.width, 
            this.canvas.height
        )

        this.params.x -= 10

        this.draw() 
    }

    draw() {
        this.canvas = document.getElementById("myCanvas")
        this.ctx2 = this.canvas.getContext("2d")
        
        this.ctx2.fillStyle = "#0000FF"
        this.ctx2.fillRect(
            this.params.x,
            this.params.y,
            this.params.width,
            this.params.height
        )
    }
}

module.exports = Rectangle
