import React from 'react'
import { render } from '@testing-library/react'
import WinnerSection from './WinnerSection'
import configureStore from '../../../store'
import { Provider } from 'react-redux'

const store = configureStore()

describe('Testing WinnerSection Component', () => {
	test('Do not render WinnerSection without the props', () => {
		const { container } = render(
			<Provider store={store}>
				<WinnerSection />
			</Provider>
		)
		expect(container.firstChild).toBeNull()
    })
    test('Should render the winner X', () => {
		const { container, getByText } = render(
			<Provider store={store}>
				<WinnerSection winner={'X'} />
			</Provider>
        )
        expect(getByText('PLAYER: X')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()  
    })
    test('Should render the winner O', () => {
		const { container, getByText } = render(
			<Provider store={store}>
				<WinnerSection winner={'O'} />
			</Provider>
        )
        expect(getByText('PLAYER: O')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()  
    })
    test('Should render the Tie section', () => {
		const { container, getByText } = render(
			<Provider store={store}>
				<WinnerSection winner={'Tie'} />
			</Provider>
        )
        expect(getByText(`OOPPS... IT'S A TIE !!!`)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()  
	})
})