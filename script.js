var dinosaur = 
document.getElementById("dinosaur");
var cactus = document.getElementById("cactus");
var isAlive = true
var score = 0;
var highScore = 0;

window.onload = function() {
    loadHighScore()
    setInterval(function() {
        score += 1;
        var scoreLabel = document.getElementById("scoring")
        scoreLabel.innerHTML = "High Score: " +highScore+ " Score: " +score;

    } ,100);
}

function loadHighScore () {
    if (localStorage.getItem("highScore") != null) {
        highScore = localStorage.getItem("highScore");
    }
}
// let lastTime 
// function update(time) {
//     if (lastTime == null) {
//         lastTime = time
//         window.requestAnimationFrame(update)
//         return
//     }
//     const delta = time - lastTime
//     lastTime = time
//     window.requestAnimationFrame(update)
// }
// window.requestAnimationFrame(update)

// add the animation to the dinosaur by adding 'class'
function jump() {
    if(dinosaur.classList != "animate"){
    dinosaur.classList.add("animate"); 
    }
    setTimeout(function(){
        dinosaur.classList.remove("animate")
    },500);
}
// WIN CONDITION & HIT DETECTION
var checkDeath = setInterval(function(){
    if (isAlive == false) return;
    var dinosaurTop = 
    parseInt(window.getComputedStyle(dinosaur).
    getPropertyValue("top"));
    var  cactusLeft = 
    parseInt(window.getComputedStyle(cactus).
    getPropertyValue("left"));
    if(cactusLeft<70 && cactusLeft>0 && dinosaurTop>130){
        cactus.style.animation = "none";
        cactus.style.display = "none";
        alert("You Lost!");
        // game resets on "ok"
        isAlive = false;
        if (score>highScore){
            highScore = score;
        }
        
        localStorage.setItem("highScore", highScore);
        location.reload();
    }
},10);