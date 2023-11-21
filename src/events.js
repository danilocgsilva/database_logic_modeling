import { rectangle1 } from "./index.js"
import { rectangle2 } from "./index.js"
import { updateCanvas } from "./index.js"

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