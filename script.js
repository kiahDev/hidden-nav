const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    if (ul.classList.contains("show")) {
        ul.classList.replace("show", "hidden");
        btn.textContent = "Show Nav";
    } else {
        ul.classList.replace("hidden", "show");
        btn.textContent = "Hide Nav";
    }
}); 