import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import ContainerItem from "mineko-design/src/layout/ContainerItem";
import Container from "mineko-design/src/layout/Container";
import Description from "mineko-design/src/text/Description";
import {Subtitle, H6} from 'mineko-design/src/text/index'
import {ButtonGrid, Button, RadioGroup} from 'mineko-design/src/buttons/index'


class Payment extends Component {
    state = {
        route: '',
        prevRoute: 'contact',
        nextRoute: 'upload',
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-evenly' item>
                <ContainerItem xs={12} sm={12} item>
                    <Description align='left' headline="Ihr gewahltes Prufpaket"
                                 description="Wir freuen uns darauf Ihre Nebenkostenabrechung zu prufen und fur Sie einen aussagekrafrigen Prufbericht zu erstellen"
                                 item/>

                    <ContainerItem gridSize={12}>
                        <Subtitle variant='subtitle2' align='left'>
                            Aktualles Prufaufkommen: BADGE
                        </Subtitle>
                    </ContainerItem>
                </ContainerItem>


                <ContainerItem  xs={8} sm={8} item>
                    <RadioGroup
                        name='MyRadioGroup'
                        value='myvalue'
                        items={[
                            {
                                'value': 'myvalue',
                                'label': 'Mieter Wohnung Premium'
                            }
                        ]}
                    />
                </ContainerItem>
                <ContainerItem xs={4} sm={4} item>
                    <Subtitle align='right'>
                        69$
                    </Subtitle>
                </ContainerItem>

                <ContainerItem xs={12} sm={12} item>
                    <ContainerItem>
                        <H6 align='left'>Wie mochten Sie bezahlen? </H6>
                    </ContainerItem>
                </ContainerItem>

                <ContainerItem gridSize={12} align='left' xs={12} sm={12} item>
                    <RadioGroup
                        name='MyRadioGroup'
                        value='paypal'
                        onChange={val => console.log(val)}
                        items={[
                            {
                                'value': 'paypal',
                                'label': 'PayPal',
                            },
                            {
                                'value': 'kreditkarte',
                                'label': 'Kreditarte',

                            },
                            {
                                'value': 'sofor',
                                'label': 'Sofortuberweisung'
                            },
                            {
                                'value': 'uber',
                                'label': 'Uberweisunng',

                            },
                            {
                                'value': 'crypto',
                                'label': 'Cryptowahrung (Bitcoin, Ether, Litecoin, Dash, XMR)',

                            }
                        ]}
                    />
                </ContainerItem>

                <ButtonGrid>
                    <Button onClick={() => this.setState({route: this.state.nextRoute}, () => {
                        this.routeChange()
                    })}>
                        Jetzt buchen & bezahlen
                    </Button>
                </ButtonGrid>

                {/*</ContainerItem>*/}
            </Container>
        )
    }

}

export default withRouter(Payment)