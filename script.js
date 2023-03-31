var dinosaur = 
document.getElementById("dinosaur");
var block = document.getElementById("block");

// add the animation to the dinosaur by adding 'class'
function jump() {
    if(dinosaur.classList != "animate"){
    dinosaur.classList.add("animate"); 
    }
    setTimeout(function(){
        dinosaur.classList.remove("animate")
    },500);
}