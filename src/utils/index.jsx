import { WINNING_COMBINATIONS, PLAYERS } from '../constants/config'

export const checkWinner = (board) => {
    if(!board) return false
    let winner
    const BOARD = board.flat() // Flatting the board
    //Looping in the combinations
    WINNING_COMBINATIONS.forEach((combination) => {
        //Looping in the players
        PLAYERS.forEach((player) => {
            if (BOARD[combination[0]] === player &&
                BOARD[combination[1]] === player &&
                BOARD[combination[2]] === player) {
                //IF the player match the combinations above assign the variable winner to the player
                winner = player
            }
        })
    })
    // If we don't have any winner and ALL the board is already filled will return a tie
    if (!winner && BOARD.filter(cv => !cv).length === 0) {
        winner = 'Tie'
    }
    // IF we have a winner will return the winner
    return winner
}