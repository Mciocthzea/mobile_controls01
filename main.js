let count = 0;

function animate(){
    requestAnimationFrame(animate);
    //count += 0.1;
    //log.innerText = count;
}

function onTouchStart(e){
    log.innerText = "Touched"
}



let log = document.getElementById("log");

document.addEventListener("touchstart",onTouchStart);
window.addEventListener('devicemotion', function(event) {
    log.innerText = "Rotate";
  });

animate();