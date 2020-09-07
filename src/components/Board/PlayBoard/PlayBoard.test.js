import React from 'react'
import { render } from '@testing-library/react'
import PlayBoard from './PlayBoard'
import configureStore from '../../../store'
import { Provider } from 'react-redux'

const store = configureStore()

const board = [
	[null, null, 'X'],
	[null, 'X', null],
	[null, null, 'O']
]

const currentPlayer = 'X'

const fullProps = {
	board, 
	currentPlayer
}


describe('Testing PlayBoard Component', () => {
	test('Do not render PlayBoard without the props', () => {
		const { container } = render(
			<Provider store={store}>
				<PlayBoard />
			</Provider>
		)
		expect(container.firstChild).toBeNull()
	})
	test('Should not render without the currentplayer props', () => {
		const { container } = render(
			<Provider store={store}>
				<PlayBoard board={board} />
			</Provider>
		)
		expect(container.firstChild).toBeNull()
	})
	test('Should not render without the board props', () => {
		const { container } = render(
			<Provider store={store}>
				<PlayBoard currentPlayer={currentPlayer} />
			</Provider>
		)
		expect(container.firstChild).toBeNull()
	})
	test('Render with fullprops has 3 noCursor class and match snapshot', () => {
		const { container } = render(
			<Provider store={store}>
				<PlayBoard {...fullProps} />
			</Provider>
		)
		const findNoCursorclass = container.querySelectorAll('.noCursor')
		expect(findNoCursorclass).toHaveLength(3)
		expect(container.firstChild).toMatchSnapshot()
	})
})