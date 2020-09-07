export const SELECT_CELL = 'SELECT_CELL'
export const CURRENTLY_WINNER = 'CURRENTLY_WINNER'
export const TRY_AGAIN = 'TRY_AGAIN'

export function selectCell(currentPlayer, row, col) {
	return {
		type: SELECT_CELL,
		currentPlayer,
		row,
		col
	}
}

export function resetBoard() {
	return {
		type: TRY_AGAIN
	}
}