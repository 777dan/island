const map = document.getElementById("map");
let coords = document.getElementById("coords");
let distanceDisplay = document.getElementById("distance");

const treasure = {
    x: Math.floor(Math.random() * map.width),
    y: Math.floor(Math.random() * map.height),
};
console.log(`x: ${treasure.x} y: ${treasure.y}`)

map.onmousemove = (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    coords.value = `Coords: ${x} : ${y}`;
    if (Math.abs(treasure.x - x) <= 30 && Math.abs(treasure.y - y) <= 30) {
        console.log("Treasure!");
    }
    getDistance(event);
};

const getDistance = (event) => {
    let distanceX = event.offsetX - treasure.x;
    let distanceY = event.offsetY - treasure.y;
    let distance = Math.floor(Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)));
    distanceDisplay.value = distance;
};