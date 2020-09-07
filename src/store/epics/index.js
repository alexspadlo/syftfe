import { combineEpics } from 'redux-observable'
import pingWinner from './pingWinner'

export default combineEpics(
    pingWinner
)