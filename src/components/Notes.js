import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {Container} from 'mineko-design/src/layout/index'
import NotesForm from "./forms/NotesForm";
import TextBanner from "mineko-design/src/trust/TextBanner";

class Notes extends Component {
    state = {
        route: '',
        prevRoute: 'upload',
        nextRoute: '/',
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <div>
                <TextBanner text='Beschreiben Sie jetzt Ihre Situation mit dem Vermieter.'/>

                <Container justify='space-between' item>
                    <NotesForm gridSize={12}>
                        <Buttons
                            onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                                this.routeChange()
                            })}
                            onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                                this.routeChange()
                            })}
                        />
                    </NotesForm>
                </Container>
            </div>
        )
    }
}

const Buttons = ({onClickPrev, onClickNext}) => (
    <ButtonGrid>
        <Button color="secondary"
                onClick={onClickPrev}>
            zuruck
        </Button>
        <Button onClick={onClickNext}>
            weiter
        </Button>
    </ButtonGrid>

);

export default withRouter(Notes)