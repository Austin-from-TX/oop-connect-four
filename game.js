import { Column } from "./column.js"

const col0 = new Column(0);
const col1 = new Column(1);
const col2 = new Column(2);
const col3 = new Column(3);
const col4 = new Column(4);
const col5 = new Column(5);
const col6 = new Column(6);

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [col0, col1, col2, col3, col4, col5, col6]
    }

    getName() {
        return `${this.player1} vs. ${this.player2}`
    }

    playInColumn(colIndex) {
        this.columns[colIndex].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIndex, colIndex) {
        return this.columns[colIndex].getTokenAt(rowIndex)
    }

}
