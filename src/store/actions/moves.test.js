import * as Actions from './moves'

describe('selectCell', () => {
	it('should create an action to select a cell', () => {
		const expectedAction = {
			type: Actions.SELECT_CELL,
			currentPlayer: 'X',
			row: 0,
			col: 0
		}
		const result = Actions.selectCell('X', 0, 0)
		expect(result).toEqual(expectedAction)
	})
})

describe('resetingTheboard', () => {
	it('should create an action to reset the boad', () => {
		const expectedAction = {
			type: Actions.TRY_AGAIN
		}
		const result = Actions.resetBoard()
		expect(result).toEqual(expectedAction)
	})
})
