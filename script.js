document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");

    for (let i = 0; i < 1000; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = ",";
        
        cell.addEventListener("mouseenter", (event) => {
            event.target.classList.add("fade-out-background");
            event.target.textContent = "";
        });

        cell.addEventListener("mouseleave", (event) => {
            setTimeout(() => {
                event.target.classList.remove("fade-out-background");
                event.target.textContent = "•";
            }, 1000)
            
        })

        grid.appendChild(cell);
    }

})
