/*Payment first page Desktop*/

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import ContactForm from './forms/contactForm'
import ButtonGrid from "mineko-design/src/buttons/ButtonGrid";
import Button from "mineko-design/src/buttons/Button";
import PaymentChoice from "./payments/PaymentChoice";
import CardInfo from 'mineko-design/src/cards/CardInfo'
import PartnersBanner from "mineko-design/src/trust/PartnersBanner";

class ContactPayment extends Component {
    state = {
        route: '',
        prevRoute: '/',
        nextRoute: 'uploadnotes',
        paymentValue: 'paypal'
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-between'>
                <ContainerItem/>

                <ContainerItem gridSize={8}>

                    {/* Container for Contact and Payment form block  */}
                    <Container justify='space-between' alignItems='flex-start'>
                        <ContainerItem gridSize={5}>
                            <ContactForm>
                                <PaymentChoice
                                    paymentOptionValue={this.state.paymentValue}
                                    onChangePaymentOption={e => this.setState({paymentValue: e.target.value})}/>
                                <Buttons
                                    onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                                        this.routeChange()
                                    })}
                                    onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                                        this.routeChange()
                                    })}
                                />
                            </ContactForm>
                        </ContainerItem>

                        <ContainerItem/>

                        <ContainerItem gridSize={5}>
                            <CardInfo imageHeight={220}

                                      image="http://tinyurl.com/yxmg9aea"
                                      items={[
                                          {'title': 'Individueller Prufbericht'},
                                          {'title': 'inkl. pers. Beratungsgesprach'},
                                          {'title': 'innerhalb von 48h'},
                                      ]}
                                      price={69}
                                      headline="Ihre gewahles Prufpaket: Mieter Wohnung Premium"
                                      description="Wir freuen uns darauf Ihre Nebenkostenabrechung zu prufen und fun Sie einen aussagekraftigen Prufbericht zu erstellen."
                            />

                            <PartnersBanner text="unsere Parthner:" />
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

export default withRouter(ContactPayment)