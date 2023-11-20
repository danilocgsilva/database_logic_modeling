function create_rectangle() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(50, 50, 100, 50);
}

module.exports = create_rectangle