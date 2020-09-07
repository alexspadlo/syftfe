import { ofType } from 'redux-observable'
import { SELECT_CELL, CURRENTLY_WINNER } from '../actions/moves'
import { filter, map } from 'rxjs/operators'
import { checkWinner } from '../../utils'

const pingWinner = (action$, state$) => {
    return action$.pipe(
        ofType(SELECT_CELL),
        filter(() => checkWinner(state$.value.board)),
        map(() => {
            return {
                type: CURRENTLY_WINNER,
                winner: checkWinner(state$.value.board)
            }
        })
    )
}

export default pingWinner