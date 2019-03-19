import React, {Component} from "react";
import HeaderComponent from 'mineko-design/src/header/Header'
import {isMobile} from "react-device-detect"
import HeaderDesktop from "mineko-design/src/header/HeaderDesktop";

function action() {
    console.log('header action')
}

class Header extends Component {
    render() {
        if(isMobile){
            return (
                <div className="header">
                    <HeaderComponent
                        trustText="Sehr gut 4,77 von 5 | 181 Bewertungen"
                        trustOnClick={action}
                        headerOnClick={action}
                    />
                </div>
            )
        }else{
            return (
                <div className="header">
                    <HeaderDesktop
                        headerOnClick={action}
                        trustText="Sehr gut 4,77 von 5 | 181 Bewertungen"
                        phone="030 588 49 454"/>
                </div>
            )
        }
    }
}

export default Header