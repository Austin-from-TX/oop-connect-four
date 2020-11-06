import { Game } from "./game.js"
import { Column } from "./column.js"


let game = undefined;
let boardHolder = document.getElementById("board-holder")
let gameName = document.getElementById("game-name")
const clickTarget = document.getElementById("click-targets")

function updateUI() {
    if (game === undefined) {
        boardHolder.classList.add("is-invisible")
    } else {
        boardHolder.classList.remove("is-invisible")
        gameName.innerHTML = game.getName()
    }
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            let target = `square-${i}-${j}`;
            let targetSquare = document.getElementById(target);
            let tokenColor = game.getTokenAt(i, j);
            targetSquare.innerHTML = '';

            let tokenDiv = document.createElement("div");
            tokenDiv.classList.add("token")
            if (tokenColor === 1) {
                tokenDiv.classList.add("black")
            }
            if (tokenColor === 2) {
                tokenDiv.classList.add("red")
            }
            targetSquare.appendChild(tokenDiv)
        }
    }
}

function redOrBlack() {
    if (game.currentPlayer === 1) {

    }
}

window.addEventListener("DOMContentLoaded", event => {

    const player1Name = document.getElementById("player-1-name");
    const player2Name = document.getElementById("player-2-name");
    const playerNameForm = document.getElementById("form-holder")
    const newGameButton = document.getElementById("new-game")

    playerNameForm.addEventListener("keyup", event => {

        if (player1Name.value && player2Name.value) {
            newGameButton.disabled = false
        } else {
            newGameButton.disabled = true
        }
    })

    newGameButton.addEventListener("click", event => {
        game = new Game(player1Name.value, player2Name.value)
        player2Name.value = ""
        player1Name.value = ""
        newGameButton.disabled = true;
        updateUI();
    })

    clickTarget.addEventListener("click", event => {
        let columnID = Number.parseInt(event.target.id[event.target.id.length - 1]);
        game.playInColumn(columnID);
        updateUI();
    })
})
