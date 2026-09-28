let broad = document.getElementById("broad");
console.log(broad);

let row = 20;
let col = 10;
for(let i = 0; i < row; i++){
    for (let j = 0; j < col; j++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        broad.appendChild(cell);
    }
}