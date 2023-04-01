var dinosaur = 
document.getElementById("dinosaur");
var cactus = document.getElementById("cactus");
var isAlive = true



let lastTime 
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime
    
    

    lastTime = time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)

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
        location.reload();
    }
},10);