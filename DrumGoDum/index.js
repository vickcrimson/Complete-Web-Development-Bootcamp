
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
  });

function sound(key){
    switch (key) {
        case "a": 
            var sound1 = new Audio("assets/audio/Tune1.mp3");
            sound1.play();
            break;

        case "s": 
            var sound2 = new Audio("assets/audio/Tune2.mp3");
            sound2.play();
            break;

        case "d": 
            var sound3 = new Audio("assets/audio/Tune3.mp3");
            sound3.play();
            break;

        case "f": 
            var sound4 = new Audio("assets/audio/Tune4.mp3");
            sound4.play();
            break;

        case "g": 
            var sound5 = new Audio("assets/audio/Tune5.mp3");
            sound5.play();
            break;
    }
}

function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }







var buttons = document.querySelectorAll(".button").length;
for (var i = 0; i < buttons; i++ ) {
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var buttonStyle = this.innerHTML; 
        sound(buttonStyle); 
        animation(buttonStyle)
    });
}


