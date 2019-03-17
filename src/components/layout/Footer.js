import React, {Component} from "react";
import {isMobile} from "react-device-detect"
import MediaBanner from "mineko-design/src/trust/MediaBanner";

class Footer extends Component {
    render() {
        if(isMobile){
            return (
                <MediaBanner text="Bekannt aus:" />
            )
        }else{
            return (
               ''
            )
        }
    }
}

export default Footer