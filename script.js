const container = document.createElement('div')

container.className = 'container';
document.body.appendChild(container);
for (i = 0; i < 16; i++) {
    let row = document.createElement('div');
    container.appendChild(row).className = "row";

    for (j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        row.appendChild(cell).className = "cell";
    }
}



container.appendChild(row);
const gridItem = document.querySelectorAll("cell");

