for (i =0; i < document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){

var buttonTapped = this.innerHTML;
makeBeat(buttonTapped);
buttonAnimation(buttonTapped);   
});
}

document.addEventListener("keypress",function(event){
    makeBeat(event.key);
    buttonAnimation(event.key);
})

function makeBeat(key){
    switch (key) {
        case "a":
        var crash1 = new Audio('sounds/crash.mp3');
        crash1.play();
        break;
    
        case "s":
        var kick1 = new Audio('sounds/kick-bass.mp3');
        kick1.play();
        break;
    
        case "d":
        var snare1 = new Audio('sounds/snare.mp3');
        snare1.play();
        break;
    
        case "f":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    
        case "g":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    
        case "h":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    
        case "j":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    
        default:
            alert(key);
        break;
    }
}

function buttonAnimation (buttonPressed){
   var activeButton = document.querySelector("." + buttonPressed);
   activeButton.classList.add("pressed");
   setTimeout (reClass, 200);
   function reClass(){
    activeButton.classList.remove("pressed");
}
}