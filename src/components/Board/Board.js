import React from 'react'
import { useSelector } from 'react-redux'
import PlayBoard from './PlayBoard'
import WinnerSection from './WinnerSection'

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  
  return (
    <section className="w-100">
      {game.winner ?
        <WinnerSection winner={game.winner} /> :
        <PlayBoard currentPlayer={game.currentPlayer} board={board} />
      }
    </section>
  )
}
export default Board
