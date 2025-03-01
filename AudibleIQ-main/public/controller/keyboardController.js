// adds event listener 
document.addEventListener("keydown", function(event) {
    // pulls variable from html file using div id and puts them into variables
    const textDisplay = document.getElementById("textDisplay");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    
    // 
    if (event.key === "ArrowLeft") {
        // textContent in html
        textDisplay.textContent = "Left";
        // glow is in css
        leftArrow.classList.add("glow");
        setTimeout(() => leftArrow.classList.remove("glow"), 100);
    } else if (event.key === "ArrowRight") {
        textDisplay.textContent = "Right";
        
        rightArrow.classList.add("glow");
        setTimeout(() => rightArrow.classList.remove("glow"), 100);
    }
});