import { Rectangle } from "./Rectangle.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

export const rectangle1 = new Rectangle(60,  50,  60, 160, "blue", ctx)
export const rectangle2 = new Rectangle(200, 100, 60, 160, "red",  ctx)

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function updateCanvas() {
    clearCanvas()
    rectangle1.draw()
    rectangle2.draw()
}

import "./events.js"

updateCanvas();
