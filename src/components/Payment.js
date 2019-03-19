import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import Container from "mineko-design/src/layout/Container";
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import PaymentForm from "./forms/PaymentForm";
import TextBanner from "mineko-design/src/trust/TextBanner";

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
            <div>
                <TextBanner text='Jetzt hochladen, Prufergebnis spatestens am 17.11.2018 erhalten.' />
                <Container justify='space-evenly' item>
                    <PaymentForm paymentOptionValue={this.state.paymentValue}
                                 onChangePaymentOption={e => this.setState({paymentValue: e.target.value})}>

                        <Buttons
                            onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                                this.routeChange()
                            })}
                            // onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                            //     this.routeChange()
                            // })}
                        />
                    </PaymentForm>
                </Container>
            </div>

        )
    }
}

const Buttons = ({onClickPrev, onClickNext}) => (
    <ButtonGrid>

        <Button onClick={onClickNext}>
            jetzt buchen & bezahlen
        </Button>
    </ButtonGrid>
);

export default withRouter(Payment)