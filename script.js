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
        var highscoreLabel = document.getElementById("highscore")
        highscoreLabel.innerHTML = "High Score: " +highScore;
        var scoreLabel = document.getElementById("score")
        scoreLabel.innerHTML = "Score: " +score;
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
    var audio = new Audio("")
    if(dinosaur.classList != "animate"){
    dinosaur.classList.add("animate"); 
    }
    audio.play();
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
        // highscore is set at the end of every round
        localStorage.setItem("highScore", highScore);
        location.reload();
    }
},10);