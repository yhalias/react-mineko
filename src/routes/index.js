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
const Upload = Loadable({
    loader: () => import('../containers/Upload'),
    loading: LoadingPage,
})
const Notes = Loadable({
    loader: () => import('../containers/Notes'),
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
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route path="/payment" component={Payment}/>
                        <Route path="/upload" component={Upload}/>
                        <Route path="/notes" component={Notes}/>
                    </Switch>
            </Router>
        )
    }
}

export default Routes