import React, {Component} from 'react'
import {Router, Route, Switch, Link} from 'react-router-dom'
import {isMobile} from "react-device-detect"
import Container from "mineko-design/src/layout/Container";
import ContainerItem from "mineko-design/src/layout/ContainerItem";

class Home extends Component {
    state = {
        url: ''
    }

    render() {
        if (isMobile) this.state.url = 'selectproduct'
        else this.state.url = 'selectproduct'

        return (
            <Container>
                <ContainerItem gridSize={12}/>
                <ContainerItem gridSize={12}/>
                <ContainerItem gridSize={12}/>

                <div className="navbar-end">
                    <Link to={this.state.url}>
                        <span className="navbar-item">CHECK UPLOADER</span>
                    </Link>
                </div>
            </Container>
        )
    }

}

export default Home