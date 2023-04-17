// In this exercise we check if your name is on the array 

var nome = window.prompt("Qual o seu nome?")
var myArray = ["Angela", "Tar", "Simone", "Anitta", "Dua"]

myArray.includes(nome)

if (myArray.includes(nome) === true){
    window.alert("Welcome!")
} else {
    window.alert("Oops! You not invited")
}