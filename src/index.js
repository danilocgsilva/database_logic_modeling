const Rectangle = require("./Rectangle.js")

const rectangle = new Rectangle()

const moveUp = document.getElementById("moveUp")
const moveDown = document.getElementById("moveDown")

moveUp.onclick = () => {
    rectangle.moveUp()
}

moveDown.onclick = () => {
    rectangle.moveDown()
}

moveRight.onclick = () => {
    rectangle.moveRight()
}

moveLeft.onclick = () => {
    rectangle.moveLeft()
}

