import React, {Component} from 'react'
import {Router, Route, Switch, Link} from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingPage from '../components/LoadingPage/LoadingPage'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const AsyncHome = Loadable({
    loader: () => import('../components/Home/Home'),
    loading: LoadingPage
})
const AsyncAbout = Loadable({
    loader: () => import('../containers/ArticleList'),
    loading: LoadingPage,
})

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <header className="header container">
                        <nav className="navbar">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Home</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/about">
                                    <span className="navbar-item">About</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path="/" component={AsyncHome}/>
                        <Route path="/about" component={AsyncAbout}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes