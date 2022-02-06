var validoSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j]
            if (val !== '.') {
                if (!linValida(board, i, j, val) || !colValida(board, i, j, val) || !tabValida(board, i, j, val)) {
                    return false
                }
            }
        }
    }
    return true
}

function linValida(board, lin, col, val) {
    for (let j = 0; j < 8; j++) {
        if (j !== col) {
            if (board[lin][j] === val) {
                return false
            }
        }
    }
    return true
}

function colValida(board, lin, col, val) {
    for (let i = 0; i < 8; i++) {
        if (i !== lin) {
            if (board[i][col] === val) {
                return false
            }
        }
    }
    return true
}

function tabValida(board, lin, col, val) {
    const linInic = lin - (lin % 3)
    const colInic = col - (col % 3)

    for (let i = linInic; i < linInic + 3; i++) {
        for (let j = colInic; j < colInic + 3; j++) {
            if (i !== lin && j !== col) {
                if (board[i][j] === val) {
                    return false
                }
            }
        }
    }
    return true
}



// exemplos


let a = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


let b = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


console.log(validoSudoku(a))
console.log(validoSudoku(b))