/*Payment first page Mobile*/
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {Container} from 'mineko-design/src/layout/index'
import ButtonGrid from "mineko-design/src/buttons/ButtonGrid";
import Button from "mineko-design/src/buttons/Button";
import ContactForm from "./forms/ContactForm";

class ProductSelector extends Component {
    state = {
        route: '',
        prevRoute: '/',
        nextRoute: 'payment',
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-between' item>
                <ContactForm gridSize={12} item>
                    <Buttons
                        onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                            this.routeChange()
                        })}
                        onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                            this.routeChange()
                        })}
                    />
                </ContactForm>
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

export default withRouter(ProductSelector)