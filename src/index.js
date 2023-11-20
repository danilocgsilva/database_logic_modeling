const create_rectangle = require("./create_rectangle.js")
const Rectangle = require("./Rectangle.js")

create_rectangle()

const rectangle = new Rectangle()

const moveUp = document.getElementById("moveUp")
moveUp.onclick = () => {
    rectangle.moveUp()
}
