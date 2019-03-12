import React, {Component} from 'react'
import {Router, Route, Switch, Link} from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className="navbar-end">
                <Link to="/contact">
                    <span className="navbar-item">Contact</span>
                </Link>
            </div>
        )
    }

}

export default Home