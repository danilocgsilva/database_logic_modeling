class Rectangle {
    constructor(x, y, height, width, color, ctx) {
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = color
        this.ctx = ctx
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveUp() {
        this.y -= 10
    }

    moveDown() {
        this.y += 10
    }

    moveLeft() {
        this.x += 10
    }

    moveRight() {
        this.x -= 10
    }
}

module.exports = Rectangle