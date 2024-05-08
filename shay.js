
const container = document.querySelector(".container")
const gridBtn = document.querySelector(".btn")
let gridFlow = document.querySelectorAll(".grid-items")





gridBtn.addEventListener("click", (e) => {
    
        let promptValue = Number(prompt("Enter a size for your grid:"));
        for (i = 0; i < (promptValue * promptValue); i++) {
        let cell = document.createElement("div");

        if (promptValue < 0) {
            promptValue = 0
        }

        if (promptValue > 100) {
            promptValue = 100
        }

        cell.addEventListener("mousemove", () => {
            cell.style.backgroundColor = "purple"
        })
       
        container.appendChild(cell).className = "grid-items";

    };
 });



















