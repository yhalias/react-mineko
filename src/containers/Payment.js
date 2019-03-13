import React, {Component} from 'react'
import ContainerItem from "mineko-design/src/layout/ContainerItem";
import Container from "mineko-design/src/layout/Container";
import Description from "mineko-design/src/text/Description";
import {Subtitle, H6} from 'mineko-design/src/text/index'
import {ButtonGrid, Button, RadioGroup} from 'mineko-design/src/buttons/index'


class Payment extends Component {
    render() {
        return (
            <Container justify='space-between' item>
                <ContainerItem gridSize={12} align='center' item>

                    <Description align='left' headline="Ihr gewahltes Prufpaket"
                                 description="Wir freuen uns darauf Ihre Nebenkostenabrechung zu prufen und fur Sie einen aussagekrafrigen Prufbericht zu erstellen"
                                 item/>

                    <Subtitle variant='subtitle2' align='left' item>
                        Aktualles Prufaufkommen: BADGE
                    </Subtitle>



                    <Container justify='space-between'>
                        <ContainerItem gridSize={8} align='left'>
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
                        <ContainerItem gridSize={4}>
                            <Subtitle align='right'>
                                69$
                            </Subtitle>
                        </ContainerItem>
                    </Container>

                    <H6 align='left'>Wie mochten Sie bezahlen? </H6>


                    <ContainerItem gridSize={12} align='left'>
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
                        <Button>
                            jetzt buchen & bezahlen
                        </Button>
                    </ButtonGrid>

                </ContainerItem>
            </Container>
        )
    }

}

export default Payment