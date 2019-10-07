class TicTacToe {
   constructor() {
        this.TickTacField = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentSymbol = 'x';
        this.numberOfSteps = 0;
    }


    getCurrentPlayerSymbol() {
        return this.currentSymbol;

    }

    nextTurn(rowIndex, columnIndex) {
        if (this.TickTacField[rowIndex][columnIndex] === null) {
            this.numberOfSteps++;

            if (this.currentSymbol === 'x') {
                this.TickTacField[rowIndex][columnIndex] = 'x';
                this.currentSymbol = 'o';
            } else {
                this.TickTacField[rowIndex][columnIndex] = 'o';
                this.currentSymbol = 'x';
            }
        }
    }

    isFinished() {
        return this.isDraw() === true || this.getWinner() !== null;
    }

    getWinner() {
        if (
            (this.TickTacField[0][0] === "x" &&
                this.TickTacField[1][1] === "x" &&
                this.TickTacField[2][2] === "x") ||
            (this.TickTacField[0][2] === "x" &&
                this.TickTacField[1][1] === "x" &&
                this.TickTacField[2][0] === "x") ||
            (this.TickTacField[0][0] === "x" &&
                this.TickTacField[0][1] === "x" &&
                this.TickTacField[0][2] === "x") ||
            (this.TickTacField[1][0] === "x" &&
                this.TickTacField[1][1] === "x" &&
                this.TickTacField[1][2] === "x") ||
            (this.TickTacField[2][0] === "x" &&
                this.TickTacField[2][1] === "x" &&
                this.TickTacField[2][2] === "x") ||
            (this.TickTacField[0][0] === "x" &&
                this.TickTacField[1][0] === "x" &&
                this.TickTacField[2][0] === "x") ||
            (this.TickTacField[0][1] === "x" &&
                this.TickTacField[1][1] === "x" &&
                this.TickTacField[2][1] === "x") ||
            (this.TickTacField[0][2] === "x" &&
                this.TickTacField[1][2] === "x" &&
                this.TickTacField[2][2] === "x")
        )
            return "x";
        if (
            (this.TickTacField[0][0] === "o" &&
                this.TickTacField[1][1] === "o" &&
                this.TickTacField[2][2] === "o") ||
            (this.TickTacField[0][2] === "o" &&
                this.TickTacField[1][1] === "o" &&
                this.TickTacField[2][0] === "o") ||
            (this.TickTacField[0][0] === "o" &&
                this.TickTacField[0][1] === "o" &&
                this.TickTacField[0][2] === "o") ||
            (this.TickTacField[1][0] === "o" &&
                this.TickTacField[1][1] === "o" &&
                this.TickTacField[1][2] === "o") ||
            (this.TickTacField[2][0] === "o" &&
                this.TickTacField[2][1] === "o" &&
                this.TickTacField[2][2] === "o") ||
            (this.TickTacField[0][0] === "o" &&
                this.TickTacField[1][0] === "o" &&
                this.TickTacField[2][0] === "o") ||
            (this.TickTacField[0][1] === "o" &&
                this.TickTacField[1][1] === "o" &&
                this.TickTacField[2][1] === "o") ||
            (this.TickTacField[0][2] === "o" &&
                this.TickTacField[1][2] === "o" &&
                this.TickTacField[2][2] === "o")
        )
            return "o";
        return null;
    }

    noMoreTurns() {
      return this.numberOfSteps === 9;
    }

    isDraw() {
        return this.numberOfSteps === 9 && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.TickTacField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
