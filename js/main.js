let grid;
let rows;
let cols;
let w = 10;
const totalBombs = 10;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function createContainer() {
    let container = document.createElement('DIV');
    container.setAttribute('class', 'container');
    return container;
}

function setup() {
    const width = 100;
    const height = 100;
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(grid);
        }

    }

    let options = []
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            options.push([i,j]);
        }
    }

    for (let n = 0; n < totalBombs; n++) {
        const index = getRandomInt(options.length);
        const choice = options[index];
        const i = choice[0];
        const j = choice[1];
        options.splice(index, 1);
        grid[i][j].bomb = true;
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].countBees(i, j, rows, cols);
        }

    }
}

function drawCells() {
    for (let i = 0; i < cols; i++) {
        let container = createContainer();
        for (let j = 0; j < rows; j++) {
            grid[i][j].show(i, j, container);
        }
    }
}

function mousePressed(e) {
    const [i, j] = e.target.id.replace('cell', '').split(',')
    grid[i][j].reveal();
    document.body.innerHTML = '';
    drawCells();
}

setup();
drawCells();
