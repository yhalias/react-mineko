import React, {Component} from 'react'
import {Router, Route, Switch, Link} from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingPage from '../components/LoadingPage/LoadingPage'
import createBrowserHistory from 'history/createBrowserHistory';
import { isMobile } from "react-device-detect"

const history = createBrowserHistory();

const ContactPayment = Loadable({
    loader: () => import('../components/ContactPayment'),
    loading: LoadingPage
})

const UploadNotes = Loadable({
    loader: () => import('../components/UploadNotes'),
    loading: LoadingPage
})

const Contact = Loadable({
    loader: () => import('../components/Contact'),
    loading: LoadingPage
})
const Payment = Loadable({
    loader: () => import('../components/Payment'),
    loading: LoadingPage,
})
const PaymentTwo = Loadable({
    loader: () => import('../components/PaymentTwo'),
    loading: LoadingPage,
})
const Upload = Loadable({
    loader: () => import('../components/Upload'),
    loading: LoadingPage,
})
const Notes = Loadable({
    loader: () => import('../components/Notes'),
    loading: LoadingPage,
})

const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: LoadingPage,
})

class Routes extends Component {
    render() {
        if (isMobile) {
            return (
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route path="/payment" component={Payment}/>
                        <Route path="/payment-2" component={PaymentTwo}/>
                        <Route path="/upload" component={Upload}/>
                        <Route path="/notes" component={Notes}/>
                    </Switch>
                </Router>
            )
        }
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contactpayment" component={ContactPayment}/>
                    <Route exact path="/uploadnotes" component={UploadNotes}/>
                </Switch>
            </Router>
        )

    }
}

export default Routes