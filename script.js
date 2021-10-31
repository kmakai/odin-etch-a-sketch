const container = document.createElement('div');
let gridRows;
let gridColumns;
let row;
let cell;
let spot;
let k;
container.className = 'container';
document.body.appendChild(container);
function creatGrid(gridRows, gridColumns) {
    for (i = 0; i < gridRows; i++) {
        row = document.createElement('div');
        container.appendChild(row).className = "row";

        for (j = 0; j < gridColumns; j++) {
            cell = document.createElement('div');
            row.appendChild(cell).className = "cell";
            cell.addEventListener("mouseover", function (e) {
                spot = e.target;
                spot.style.backgroundColor = "red";
            })

        }

    }
}





gridRows = prompt("how many rows do you want? ");
gridColumns = prompt("how many columns do you want?");
creatGrid(gridRows,gridColumns);
