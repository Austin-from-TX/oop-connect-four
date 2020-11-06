export class Column {
    constructor(colNum) {
        this.colNum = colNum;
        this.col = [0, 0, 0, 0, 0, 0, 0]
    }
    add(playerNum) {
        for (let i = 6; i >= 1; i--) {
            if (this.col[i] === 0) {
                this.col[i] = playerNum;
                break;
            }
        }
    }

    getTokenAt(rowIndex) {
        if (this.col[rowIndex] === 0) {
            return null;
        } else {
            return this.col[rowIndex]
        }
    }
}
