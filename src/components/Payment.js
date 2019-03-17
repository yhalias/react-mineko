import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import Container from "mineko-design/src/layout/Container";
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import PaymentForm from "./forms/PaymentForm";

class Payment extends Component {
    state = {
        route: '',
        prevRoute: 'contact',
        nextRoute: 'upload',
        paymentValue: 'paypal'
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-evenly' item>
                <PaymentForm paymentOptionValue={this.state.paymentValue}
                             onChangePaymentOption={e => this.setState({paymentValue: e.target.value})}>

                    <Buttons
                        onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                            this.routeChange()
                        })}
                        onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                            this.routeChange()
                        })}
                    />
                </PaymentForm>
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
            Jetzt buchen & bezahlen
        </Button>
    </ButtonGrid>
);

export default withRouter(Payment)