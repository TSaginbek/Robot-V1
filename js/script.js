const robot   = document.getElementById("robot");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

setTimeout(() => {
    robot.style.left = "100px";
    if(robot.style.left == "100px") {
        robot.classList.add("test");
    }
}, 1000);

function jump() {
    if(robot.classList != "jump") {
        robot.classList.add("jump");
    }
    setTimeout( function() {
        robot.classList.remove("jump");
    }, 1000)
}

let isAlive = setInterval(() => {
    let robotTop   = parseInt(window.getComputedStyle(robot).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))   

    if (cactusLeft < 150 && cactusLeft > 0 && robotTop >= -90) {  
        alert("Конец!!!");
    }
}, 1000 / 24);