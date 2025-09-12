const button1 = document.getElementById("About");
const button2 = document.getElementById("Showcases");
const target2 = document.getElementById("showcasestext");
const button3 = document.getElementById("Contact");

button1.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

button2.addEventListener("click", () => {
    target2.scrollIntoView({ behavior: "smooth", block: "center" });
});

button3.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");

hamburger.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

