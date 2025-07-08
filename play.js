// variables
let mistakes = 0;
const cell = document.querySelectorAll(".smallBox");
const boxNumber = document.querySelectorAll(".Number");
const reset = document.querySelector(".reset");
const musicButton = document.querySelector(".musicButton");
let selectedID = null;
let selectedCell = null;
let isItemSelected = false;
let emptyString = 0;
let filledCorrect = 0;
let music = false;
const bgMusic = document.getElementById("bgMusic");
const soulution = [
  [5, 3, 6, 1, 7, 2, 8, 9, 4],
  [8, 2, 7, 9, 6, 4, 1, 5, 3],
  [9, 4, 1, 3, 5, 8, 2, 6, 7],
  [7, 1, 5, 6, 4, 3, 9, 2, 8],
  [3, 4, 9, 7, 8, 2, 5, 1, 6],
  [8, 2, 6, 1, 9, 5, 7, 3, 4],
  [4, 8, 1, 3, 6, 9, 2, 5, 7],
  [2, 9, 5, 4, 7, 1, 6, 3, 8],
  [6, 7, 3, 5, 8, 2, 4, 1, 9],
];
const generated = [
  ["", "", 6, "", 7, "", 8, "", ""],
  ["", "", "", "", 6, "", 1, "", 3],
  ["", "", 1, "", 5, "", 2, "", ""],
  ["", "", 5, "", 4, "", "", "", 8],
  ["", 4, "", 7, "", 2, "", 1, ""],
  [8, "", "", "", 9, "", 7, "", ""],
  ["", "", 1, "", 6, "", 2, "", ""],
  [2, "", 5, "", 7, "", "", "", ""],
  ["", "", 3, "", 8, "", 4, "", ""],
];

// functions

//check weather there is Number or not
const thereIsNumber = (event) => {
  const num = event.target.innerText;
  selectedID = num;
  selecting(event);
};

// make sure that when hover over number it will not display cursor on the cell
const selecting = (cell) => {
  const text = cell.target.innerText;
  if (!(text === "")) {
    cell.target.style.cursor = "auto";
  }
};
// when selecting cell that there is no number on it it will display click effect and background color
const isSelcted = (event) => {
  const cell = event.target;
  if (
    isItemSelected === true &&
    selectedCell === cell &&
    cell.innerText === ""
  ) {
    unSelectElemnt(cell);
  } else if (
    isItemSelected === true &&
    !(selectedCell === cell) &&
    cell.innerText === ""
  ) {
    selectNewElement(selectedCell, cell);
  } else if (isItemSelected === false && cell.innerText === "") {
    selctElement(cell);
  }
};
// unselect element if it is alreay been selected before
const unSelectElemnt = (event) => {
  event.classList.remove("selected");
  isItemSelected = false;
  selectedCell = null;
};
// select element if nothing been selected
const selctElement = (event) => {
  event.classList.add("selected");
  isItemSelected = true;
  selectedCell = event;
};
// when element already selected but the user select new one it will switch to the new one
const selectNewElement = (oldCell, newCell) => {
  selectedCell = newCell;
  oldCell.classList.remove("selected");
  newCell.classList.add("selected");
  isItemSelected = true;
};

// generate numbers from generated array to the cells
const generate = () => {
  for (let i = 0; i < generated.length; i++) {
    for (let j = 0; j < generated[i].length; j++) {
      let index = i * 9 + j;
      cell[index].innerText = generated[i][j];
      if (cell[index].innerText === "") {
        emptyString++;
      }
    }
  }
};
// when player makes mistake it will increase
const mistakeHappend = () => {
  mistakes++;
  document.querySelector("h3").innerText = `mistakes:${mistakes} /3`;

  isLose();
};
// when the limit of mistakes have been reached max number
const isLose = () => {
  if (mistakes >= 100) {
    setTimeout(function () {}, 500);
    location.reload();
  }
};

//return the number from the box
const numberSelected = (event) => {
  const number = event.target.innerText;
  if (selectedCell !== null) {
    printNumber(number);
    checkSolution(selectedCell);
  }
};

//print the number in the box
const printNumber = (selectedNumber) => {
  selectedCell.innerText = selectedNumber;
};
const checkSolution = (event) => {
  const selectedCellID = event.getAttribute("id");
  const insideCell = parseInt(event.innerText);
  const row = Math.floor(selectedCellID / 9);
  const column = selectedCellID % 9;
  const rightAnswer = parseInt(soulution[row][column]);

  if (insideCell === rightAnswer) {
    event.style.color = "green";
    unSelectElemnt(event);
    filledCorrect++;
  } else {
    event.style.color = "red";
    mistakeHappend();
    setTimeout(() => {
      event.innerText = "";
    }, 500);
  }
  setTimeout(checkVictory, 1);
};
const checkVictory = () => {
  if (filledCorrect === emptyString) {
    alert("you won");
  }
};
const resetButton = () => {
  location.reload();
};
const playMusic = () => {
  music = !music;
  if (music) {
    bgMusic.play();
    musicButton.innerText = "music";
  } else {
    musicButton.innerText = "no music";
    bgMusic.pause();
  }
};

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", isSelcted);
  cell[i].addEventListener("mouseover", thereIsNumber);
}
for (let j = 0; j < boxNumber.length; j++) {
  boxNumber[j].addEventListener("click", numberSelected);
}
reset.addEventListener("click", resetButton);
musicButton.addEventListener("click", playMusic);

generate();