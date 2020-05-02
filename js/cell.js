class Cell {
    constructor() {
        this.neighborCount = 0;
        this.bomb = false;
        this.revealed = false;
    }

    reveal() {
        console.log('clicked');
        this.revealed = true;
    }

    show(i, j, container) {
        let div = document.createElement('DIV');
        div.setAttribute('id', `cell${i},${j}`);
        div.setAttribute('class', 'cell');
        div.addEventListener('click', mousePressed);

        if (this.revealed) {
            if (this.bomb) {
                div.setAttribute('class', 'cell bomb');
            } else {
                div.setAttribute('class', 'darkCell');
                if (this.neighborCount > 0) {
                    div.innerHTML = this.neighborCount
                }
            }
        }

        container.appendChild(div);
        document.body.appendChild(container);
    }

    countBees(x, y, rows, cols) {
        let total = 0;
        if (this.bomb) {
            this.neighborCount = -1;
        }

        for (let xOff = -1; xOff <= 1; xOff++) {
            for (let yOff = -1; yOff <= 1; yOff++) {
                const i = x + xOff;
                const j = y + yOff;
                if (i > -1 && i < cols && j > - 1 && j < rows) {
                    const neighbor = grid[i][j];
                    if (neighbor.bomb) {
                        total++;
                    }
                }
            }

        }
        this.neighborCount = total
    }

}