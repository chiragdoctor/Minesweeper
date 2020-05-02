function createInlineDiv(i) {
    let div = document.createElement('DIV');
    div.innerHTML = i;
    div.setAttribute('id', `cell${i}`);
    div.setAttribute('class', 'cell');
    // div.addEventListener('click', onCellClicked);
    return div;
}

function createContainer() {
    let container = document.createElement('DIV');
    container.setAttribute('class', 'container');
    return container;
}

function createTable() {
    let container;
    for (let i = 1; i <= 100; i++) {
        if (i == 1) {
            container = createContainer();
        }

        if ((i - 1) % 10 === 0) {
            container = createContainer();
        }
        let cell = createInlineDiv(i);
        container.appendChild(cell);
        document.body.appendChild(container);
    }

}


class Cell {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
        if (Math.random(1) < 0.5) {
            this.bomb = true;
        } else {
            this.bomb = false;
        }

        this.revealed = false;
    }

    show(i,j) {
        let div = document.createElement('DIV');
        div.innerHTML = `${i},${j}`;
        div.setAttribute('id', `cell${i},${j}`);
        div.setAttribute('class', 'cell');
        // div.addEventListener('click', onCellClicked);
        return div;
    }
}