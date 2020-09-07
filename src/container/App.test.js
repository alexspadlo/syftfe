import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import configureStore from '../store'
import { Provider } from 'react-redux'

test('Check all the 9 cells is in the App and do a snapshot', () => {
	const { container } = render(
		<Provider store={configureStore()}>
			<App />
		</Provider>
	)
	const tikTokclass = container.querySelectorAll('.tictok')
	expect(tikTokclass).toHaveLength(9)
	expect(container.firstChild).toMatchSnapshot()
})