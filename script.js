let board = document.getElementById("board");
console.log(board);

let row = 20;
let col = 10;
for(let i = 0; i < row; i++){
    for (let j = 0; j < col; j++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
    }
}

// lưu lại trạng thái của bảng mỗi ô có gtri 0 sau gán thành 1
let matrix = [];
for (let i = 0; i < row; i++){
    let row=[];
    for (let j = 0; j < col; j++){
        row.push(0);
    }
    matrix.push(row);
}
console.log(matrix);

// khối 4 ô
let block = [[1,1],[1,1]];
console.log(block);

let blockRow = 0;
let blockCol = 4;

function drawBlock(){
    let cell = board.children;
    for (let i = 0; i < block.length; i++){
        for (let j = 0; j < block[i].length; j++){
            if(block[i][j] === 1){
                let r = blockRow + i;
                let c = blockCol + j;
                let index = r * col + c;
                cell[index].classList.add("block");
            }
}
    }
}
drawBlock();