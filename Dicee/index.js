var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var img1 = "images\\dice" + randomNumber1 + ".png";
var img2 = "images\\dice" + randomNumber2 + ".png";


function rollDice(){
document.getElementById("img1").src = img1;
document.getElementById("img2").src = img2;

if (randomNumber1 > randomNumber2){
    document.getElementById("winner").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.getElementById("winner").innerHTML = "Player 2 Wins!"
} else {
    document.getElementById("winner").innerHTML = "It's a draw!"
}
}