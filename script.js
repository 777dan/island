const wrap = document.getElementById("wrap");
const circle = document.getElementById("circle");
const getClueButton = document.querySelector('#getClue');
let coords = document.getElementById("coords");
let distanceDisplay = document.getElementById("distance");

const treasure = {
    x: Math.floor(Math.random() * wrap.width.baseVal.value),
    y: Math.floor(Math.random() * wrap.height.baseVal.value),
};
console.log(`x: ${treasure.x} y: ${treasure.y}`)

wrap.onmousemove = (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    coords.value = `Coords: ${x} : ${y}`;
    if (Math.abs(treasure.x - x) <= 30 && Math.abs(treasure.y - y) <= 30) {
        circle.setAttribute('r', '10');
        circle.setAttribute('cx', treasure.x);
        circle.setAttribute('cy', treasure.y);
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

getClueButton.addEventListener('click', () => {
    circle.setAttribute('r', '20');
    circle.setAttribute('cx', treasure.x);
    circle.setAttribute('cy', treasure.y);
});