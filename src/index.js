import { Rectangle } from "./Rectangle.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const rectangle1 = new Rectangle(60,  50,  60, 160, "blue", ctx)
const rectangle2 = new Rectangle(200, 100, 60, 160, "red",  ctx)

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateCanvas() {
    clearCanvas()
    rectangle1.draw()
    rectangle2.draw()
}

updateCanvas();

rect1Up.onclick = () => {
    rectangle1.moveUp()
    updateCanvas()
}
rect1Down.onclick = () => {
    rectangle1.moveDown()
    updateCanvas()
}
rect1Left.onclick = () => {
    rectangle1.moveRight()
    updateCanvas()
}
rect1Right.onclick = () => {
    rectangle1.moveLeft()
    updateCanvas()
}
rect2Up.onclick = () => {
    rectangle2.moveUp()
    updateCanvas()
}
rect2Down.onclick = () => {
    rectangle2.moveDown()
    updateCanvas()
}
rect2Left.onclick = () => {
    rectangle2.moveRight()
    updateCanvas()
}
rect2Right.onclick = () => {
    rectangle2.moveLeft()
    updateCanvas()
}
