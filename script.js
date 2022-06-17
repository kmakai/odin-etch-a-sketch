const container = document.querySelector(".container");
const resetbtn = document.querySelector(".reset");
const newGridbtn = document.querySelector(".new-grid");

let gridRows;
let gridColumns;
let spot;

function creatGrid(gridRows, gridColumns) {
  container.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridRows}}, 1fr)`;

  for (let i = 0; i < gridRows * gridColumns; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseover", function (e) {
      spot = e.target;
      spot.style.backgroundColor = "red";
    });

    container.appendChild(cell);
  }
}

function resetgrid() {
  const gridItems = document.querySelectorAll(".cell");
  gridItems.forEach((element) => {
    element.style.backgroundColor = "aquamarine";
  });
}

function newGrid() {
  let gridSize = +prompt("what what is the new size (Max 100): ");
  gridColumns = gridSize;
  gridRows = gridSize;
  container.innerHTML = "";
  creatGrid(gridRows, gridColumns);
}

gridRows = 50; //prompt("how many rows do you want? ");
gridColumns = gridRows;
creatGrid(gridRows, gridColumns);

resetbtn.addEventListener("click", resetgrid);

newGridbtn.addEventListener("click", newGrid);
