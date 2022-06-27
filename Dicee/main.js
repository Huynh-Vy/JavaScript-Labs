let randomNumner1 = Math.floor(Math.random() * 6 + 1);
let randomNumner2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumner1 +".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumner2 +".png");

if (randomNumner1 > randomNumner2) {
    document.querySelector("h1").innerText = "player 1 wins";
} else if (randomNumner1 < randomNumner2) {
    document.querySelector("h1").innerText = "player 2 wins";
} else {
    document.querySelector("h1").innerText = "draw";
}