import React, {Component} from 'react'
import {Router, Route, Switch, Link} from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingPage from '../components/LoadingPage/LoadingPage'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const Contact = Loadable({
    loader: () => import('../containers/Contact'),
    loading: LoadingPage
})
const Payment = Loadable({
    loader: () => import('../containers/Payment'),
    loading: LoadingPage,
})

const Home = Loadable({
    loader: () => import('../containers/Home'),
    loading: LoadingPage,
})

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                    {/*<header className="header container">*/}
                        {/*<nav className="navbar">*/}
                            {/*<div className="navbar-brand">*/}
                                {/*<Link to="/contact">*/}
                                    {/*<span className="navbar-item">Contact</span>*/}
                                {/*</Link>*/}
                            {/*</div>*/}

                            {/*<div className="navbar-end">*/}
                                {/*<Link to="/payment">*/}
                                    {/*<span className="navbar-item">Payment</span>*/}
                                {/*</Link>*/}
                            {/*</div>*/}
                        {/*</nav>*/}
                    {/*</header>*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route path="/payment" component={Payment}/>
                    </Switch>
            </Router>
        )
    }
}

export default Routes