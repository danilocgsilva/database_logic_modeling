class Rectangle {

    constructor() {
        this.canvas = document.getElementById("myCanvas")
        this.ctx2 = this.canvas.getContext("2d")
        
        this.ctx2.fillStyle = "#0000FF"
        this.ctx2.fillRect(50, 150, 100, 50)
    }

    moveUp() {
        this.ctx2.clearRect(
            0, 
            0, 
            this.canvas.width, 
            this.canvas.height
        )
    }
}

module.exports = Rectangle
