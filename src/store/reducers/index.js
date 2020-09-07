import { combineReducers } from 'redux'
import { SELECT_CELL, CURRENTLY_WINNER, TRY_AGAIN } from '../actions/moves'

export const createBoard = (i) =>
	Array(i)
		.fill(null)
		.map(_ =>
			Array(i)
				.fill(null)
		)

export const board = (state = createBoard(3), action) => {
	switch (action.type) {
		case SELECT_CELL: {
			const newBoard = JSON.parse(JSON.stringify(state))
			newBoard[action.row][action.col] = action.currentPlayer
			return newBoard
		}
		case TRY_AGAIN: {
			return createBoard(3)
		}
		default: {
			return state
		}
	}
}

export const game = (state = { currentPlayer: 'X', winner: null }, action) => {
	switch (action.type) {
		case SELECT_CELL: {
			return {
				...state,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
			}
		}
		case CURRENTLY_WINNER: {
			return {
				...state,
				winner: action.winner
			}
		}
		case TRY_AGAIN: {
			return {
				currentPlayer: 'X', 
				winner: null 
			}
		}
		default: {
			return state
		}
	}
}

export default combineReducers({
	board,
	game
})
