/*Payment first page Desktop*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import ButtonGrid from "mineko-design/src/buttons/ButtonGrid";
import Button from "mineko-design/src/buttons/Button";
import UploadForm from "./forms/UploadForm";
import NotesForm from "./forms/NotesForm";

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

                        <ContainerItem gridSize={5}>

                        </ContainerItem>
                    </Container>

                </ContainerItem>

                <ContainerItem/>
            </Container>
        )
    }
}

const Buttons = ({onClickNext}) => (
    <ButtonGrid>
        <Button onClick={onClickNext}>
            jetzt buchen & bezahlen
        </Button>
    </ButtonGrid>
);

export default withRouter(UploadNotes)