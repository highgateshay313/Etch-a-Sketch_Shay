
const container = document.querySelector(".container")
const gridBtn = document.querySelector(".btn")





gridBtn.addEventListener("click", (e) => {
    
        let promptValue = Number(prompt("Enter a size for your grid:"));
       for (i = 0; i < (promptValue * promptValue); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-items";
    };
 });
    





// function grid() {
 
    
// }









