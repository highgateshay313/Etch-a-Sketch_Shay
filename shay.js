
const container = document.querySelector(".container")
const gridBtn = document.querySelector(".btn")

function makeRows(rows, cols) {
   
    for ( i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerHTML = (i + 1);
        container.appendChild(cell).className = "grid-items";
    };

    gridBtn.addEventListener("click", (e) => {
        
    })
};




makeRows(16, 16)

