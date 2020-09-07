import React from 'react'
import { render } from '@testing-library/react'
import Board from './Board'
import configureStore from '../../store'
import { Provider } from 'react-redux'

test('Check all the 9 cells is in the board and do a snapshot', () => {
	const { container } = render(
		<Provider store={configureStore()}>
			<Board />
		</Provider>
	)
	const tikTokclass = container.querySelectorAll('.tictok')
	expect(tikTokclass).toHaveLength(9)
	expect(container.firstChild).toMatchSnapshot()
})