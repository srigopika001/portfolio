
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");

    menuBtn.textContent =
        menu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function() {
        menu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});
