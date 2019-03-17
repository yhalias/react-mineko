import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {Container} from 'mineko-design/src/layout/index'
import NotesForm from "./forms/NotesForm";

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
        )
    }
}

const Buttons = ({onClickPrev, onClickNext}) => (
    <ButtonGrid>
        <Button color="secondary"
                onClick={onClickPrev}>
            Zuruck
        </Button>
        <Button onClick={onClickNext}>
            Weiter
        </Button>
    </ButtonGrid>

);

export default withRouter(Notes)