/*Payment first page Desktop*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import ButtonGrid from "mineko-design/src/buttons/ButtonGrid";
import Button from "mineko-design/src/buttons/Button";
import UploadForm from "./forms/UploadForm";
import NotesForm from "./forms/NotesForm";
import StepsHeader from "mineko-design/src/header/StepsHeader";
import MediaBanner from "mineko-design/src/trust/MediaBanner";

class UploadNotes extends Component {
    state = {
        route: '',
        prevRoute: '/contactpayment',
        nextRoute: '/',
        paymentValue: 'paypal'
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-between' item>
                <ContainerItem/>

                <ContainerItem gridSize={8}>

                    <ContainerItem item>
                        <StepsHeader
                            currentStep={2}
                            steps={['1. Besteleen & Bezahlen', '2. Unterlagen hochladen', '3. Prufbericht erhalten']}/>
                    </ContainerItem>

                    {/* Container for Contact and Payment form block  */}
                    <Container justify='space-between' item>
                        <ContainerItem gridSize={5}>
                            <UploadForm>

                                <NotesForm/>
                                <Buttons
                                    onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                                        this.routeChange()
                                    })}
                                    onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                                        this.routeChange()
                                    })}
                                />
                            </UploadForm>
                        </ContainerItem>

                        <ContainerItem/>

                        <ContainerItem gridSize={5}></ContainerItem>

                    </Container>

                </ContainerItem>

                <ContainerItem/>
            </Container>
        )
    }
}

const Buttons = ({onClickNext}) => (
    <div id='buttons-control'>
        <ButtonGrid>
            <Button onClick={onClickNext}>
                jetzt buchen & bezahlen
            </Button>
        </ButtonGrid>
        <MediaBanner text="Bekannt aus:" />
    </div>
);

export default withRouter(UploadNotes)