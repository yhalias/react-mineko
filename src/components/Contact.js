/*Payment first page Mobile*/
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {Container} from 'mineko-design/src/layout/index'
import ButtonGrid from "mineko-design/src/buttons/ButtonGrid";
import Button from "mineko-design/src/buttons/Button";
import ContactForm from "./forms/ContactForm";
import TextBanner from "mineko-design/src/trust/TextBanner";

class Contact extends Component {
    state = {
        route: '',
        prevRoute: 'selectproduct',
        nextRoute: 'payment',
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <div>
                <TextBanner text='Jetzt hochladen, Prufergebnis spatestens am 17.11.2018 erhalten - ab €29,-' />
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
            </div>
        )
    }
}

const Buttons = ({onClickPrev, onClickNext}) =>
    (
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

export default withRouter(Contact)