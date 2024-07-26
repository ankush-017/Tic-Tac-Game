const ResultStatus = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = "X";
let textBox = ["","","","","","","","",""];

const winningMessage = ()=> `Player ${currentPlayer} has Won!`;
const DrawMessage = () => `Match Draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer} turn`;

ResultStatus.innerHTML = currentPlayerTurn();

const winningConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6], 
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleCellText(clickedCell,clickedCellIndex){
    textBox[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange(){
    currentPlayer = (currentPlayer === "X")?"O":"X";
    ResultStatus.innerHTML = currentPlayerTurn();
}

function handleResultDeclaration(){
    let roundWon = false;
    for(let i=0;i<=7;i++){
        const wincondition = winningConditions[i];
        let a = textBox[wincondition[0]];
        let b = textBox[wincondition[1]];
        let c = textBox[wincondition[2]];
        if(a === '' || b === '' || c === ''){
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        ResultStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let draw = !textBox.includes("");
    if(draw){
        ResultStatus.innerHTML = DrawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}


function handleCellclick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('cell-index'));

    if(textBox[clickedCellIndex] !== "" && !gameActive){
        return;
    }
    handleCellText(clickedCell,clickedCellIndex);
    handleResultDeclaration();
}

document.querySelectorAll('.cell').forEach(cell=> cell.addEventListener('click',handleCellclick));

function resetGame() {
    gameActive = true;
    currentPlayer = "X";
    textBox = ["","","","","","","","",""];
    ResultStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// Example button for resetting the game
document.querySelector('.restart').addEventListener('click', resetGame);