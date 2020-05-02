// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext("2d");
let grid;
let rows;
let cols;
let w = 10;


function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function createContainer() {
    let container = document.createElement('DIV');
    container.setAttribute('class', 'container');
    return container;
}

function setup() {
    const width = 100;
    const height = 100;
    // createCanvas(width, height, 'white');
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);
    console.log(rows, cols);
    grid = make2DArray(10, 10);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i * w, j * w, w);
        }

    }
}

function drawCells() {
    for (let i = 0; i < cols; i++) {
        let container = createContainer();
        for (let j = 0; j < rows; j++) {
            container.appendChild(grid[i][j].show(i, j));
        }
        document.body.appendChild(container);
    }
}

setup();
drawCells();
