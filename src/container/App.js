import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import Board from '../components/Board'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/syftfe' component={Board} />
                <Redirect from="*" to="/syftfe" />
            </Switch>
        </Router>
    )
}

export default App