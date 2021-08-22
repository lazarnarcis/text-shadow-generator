let x = 2, y = 2, z = 2, s = 1, colors = "#31b8f2";

function shiftRight() {
    let shiftRight = document.getElementById("shiftRight").value;
    x = shiftRight;
}
function shiftDown() {
    let shiftDown = document.getElementById("shiftDown").value;
    y = shiftDown;
}
function blurFunction() {
    let blur = document.getElementById("blur").value;
    z = blur;
}
function opacity() {
    let opacity = document.getElementById("opacity").value;
    color();
    s = opacity;
}
function color() {
    let color = document.getElementById("color").value;
    colors = "rgba(" + color.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) }).join(",") + "," + s + ")";
}
setInterval(function(){
    document.getElementById("result").innerHTML = "text-shadow: " + x + "px " + y + "px " + z + "px " + colors + ";";
    document.getElementById("boxGenerator").style.textShadow = x + "px " + y + "px " + z + "px " + colors;
}, 1);
document.getElementById("copy").addEventListener("click", function(){
    let copyText = "text-shadow: " + x + "px " + y + "px " + z + "px " + colors + ";";
    navigator.clipboard.writeText(copyText);
    alert("Copied to clipboard!");
});