

function GlowingLogo(){
    document.getElementById("Logo").style.textShadow = "0 0 15px white";
    document.getElementById("glowingbar").style.boxShadow = "0 0 15px white"; 

}
function LightoutLogo(){
    document.getElementById("Logo").style.textShadow = "0 0 0px white";
    document.getElementById("glowingbar").style.boxShadow = "0 0 0px white"; 
}


function IconHover(Icon,moving) {
    // 0 is exit 1 is enter
    if (Icon == "port1") {
        document.getElementById("port1og").style.opacity = 1-moving;
        document.getElementById("port1ac").style.opacity = moving;
    }
    else if (Icon == "port2") {
        document.getElementById("port2og").style.opacity = 1-moving;
        document.getElementById("port2ac").style.opacity = moving;
    }
}



const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");

hamburger.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});