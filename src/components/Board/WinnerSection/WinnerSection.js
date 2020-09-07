import React from 'react'
import { resetBoard } from '../../../store/actions/moves'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import winnerImage from '../../../static/winner.png'
import opsImage from '../../../static/ops.png'
import s from './WinnerSection.module.scss'

const WinnerSection = ({winner}) => { 
    const dispatch = useDispatch()
    if(!winner) return null   
    return (
        <section className={`w-100 ${s.containerBack}`}>
            <div className="container">
                {winner === 'Tie'
                    ? <div className="row m-0">
                        <div className={`col-12 ${s.customPaddingTop} text-center`}>
                            <h1 className={s.customTitle}>OOPPS... IT'S A TIE !!!</h1>
                            <h2 className={`${s.customSubtitle} pt-5`}> TRY AGAIN</h2>
                        </div>
                        <div className={`col-lg-4 col-12 ${s.customPaddingBottom} m-auto`}>
                            <img className="img-fluid" src={opsImage} alt="tictoc" />
                        </div>
                        <section className="w-100 pb-5 text-center">
                            <button onClick={() => dispatch(resetBoard())} className={s.customButton}>TRY AGAIN</button>
                        </section>
                    </div>
                    :
                    <div className="row m-0">
                        <div className={`col-12 ${s.customPaddingTop} text-center`}>
                            <h1 className={s.customTitle}>AND THE WINNER IS....</h1>
                            <h2 className={`${s.customSubtitle} pt-5`}>PLAYER: {winner}</h2>
                        </div>
                        <div className={`col-lg-4 col-12 ${s.customPaddingBottom} m-auto`}>
                            <img className="img-fluid" src={winnerImage} alt="tictoc" />
                        </div>
                        <section className="w-100 pb-5 text-center">
                            <button onClick={() => dispatch(resetBoard())} className={s.customButton}>TRY AGAIN</button>
                        </section>
                    </div>
                }
            </div>
        </section>
    )
}

WinnerSection.propTypes = {
    winner: PropTypes.string
}

WinnerSection.defaultProps = {
	winner: null
}

export default WinnerSection