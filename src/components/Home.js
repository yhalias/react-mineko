import React, {Component} from 'react'
import {Router, Route, Switch, Link} from 'react-router-dom'
import { isMobile } from "react-device-detect"

class Home extends Component {
    state = {
        url:''
    }
    render() {
        if(isMobile) this.state.url = 'contact'
        else this.state.url = 'contactpayment'

        return (
            <div className="navbar-end">
                <Link to={this.state.url}>
                    <span className="navbar-item">Contact</span>
                </Link>
            </div>
        )
    }

}

export default Home