import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCell } from '../../../store/actions/moves'
import tictocImage from '../../../static/tictoctoe.png'
import PropTypes, { any } from 'prop-types'
import s from './PlayBoard.module.scss'

const PlayBoard = ({ currentPlayer, board }) => {
    const dispatch = useDispatch()
    if(!board || !currentPlayer) return null
    return (
        <section className={`w-100 ${s.containerBack}`}>
            <div className={`container`}>
                <div className="row m-0">
                    <div className={`col-12 col-lg-5 m-auto ${s.customPaddingTop} text-center`}>
                        <img className="img-fluid" src={tictocImage} alt="tictoc" />
                    </div>
                    <div className={`col-12 col-lg-7 ${s.customPaddingTop} m-auto`}>
                        <div className="row m-0">
                            {board && board.length > 0 &&
                                board.map((row, rowIndex) => (
                                    <div key={`cvUnique${rowIndex}`} className="col-lg-9 col-12 m-auto">
                                        <div className="row m-0">
                                            {row && row.length > 0 &&
                                                row.map((colValue, colIndex) => (
                                                    <div
                                                        onClick={() => {
                                                            if (!colValue) {
                                                                dispatch(selectCell(currentPlayer, rowIndex, colIndex))
                                                            }
                                                        }}
                                                        key={`boxUnique${colIndex}`}
                                                        className={`col ${s.clickText} ${colValue ? s.noCursor : ''} ${s.tictok} ${s[`box${rowIndex}col${colIndex}`]}`}>
                                                        {colValue ? colValue : ''}
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

PlayBoard.propTypes = {
    currentPlayer: PropTypes.string,
    board: PropTypes.arrayOf(PropTypes.arrayOf(any))
}

export default PlayBoard