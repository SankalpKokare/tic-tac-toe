const cells = document.getElementsByClassName("cell");

intialGame();

//add event listner
function intialGame() {
  Array.from(cells).forEach((element) => {
    element.addEventListener("click", game, { once: true });
  });
}
let gamestatus = 1;
//buttonclicked
function game() {
  //switch
  let element = this;
  //turn
  let i = turn();
  //draw
  if (gamestatus == 1) {
    write(element, i);
    win(i, element);
  }
  
}

//draw x and o's
function write(element, i) {
  let write = document.getElementById(element.id);
  write.innerHTML = i ? "o" : "x";
  //added to array
}

let i = 0;
function turn() {
  i++;
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function win(turn, character) {
  let winSet = [
    [1, 4, 7],
    [8, 5, 2],
    [9, 6, 3],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [3, 5, 7],
  ];

  let letter = turn ? "o" : "x";

  for (let i = 0; i < winSet.length; i++) {
    const check = winSet[i];

    const one = document.getElementById(check[0]);
    const two = document.getElementById(check[1]);
    const three = document.getElementById(check[2]);

    if (
      one.innerHTML == letter &&
      two.innerHTML == letter &&
      three.innerHTML == letter
    ) {
      console.log("equal");
      gameOver(letter);
    }
  }
}

function gameOver(letter) {
  gamestatus = 0;

  const player = letter == "x" ? "Player One" : "Player Two";
  const appendDiv = document.getElementById("result");
  const winner = document.createElement("div");

  winner.innerHTML = ` <h1> ${player} Won</h1> `;

  appendDiv.appendChild(winner);
}

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click" , reset)
function reset() {
  
  Array.from(cells).forEach((element) => {

    element.innerHTML = "";
    
  })

}