import React, {Component} from 'react'
import ContainerItem from "mineko-design/src/layout/ContainerItem";
import Description from "mineko-design/src/text/Description";
import ButtonGrid from "mineko-design/src/buttons/ButtonGrid";
import Button from "mineko-design/src/buttons/Button";
import Container from "mineko-design/src/layout/Container";
import RadioGroup from "mineko-design/src/buttons/RadioGroup";

class Payment extends Component {
    render() {
        return (
            <Container justify='space-between' item>

                <ContainerItem gridSize={12} align='center'>

                    <Description align='left' headline="Ihr gewahltes Prufpaket"
                                 description="Wir freuen uns darauf Ihre Nebenkostenabrechung zu prufen und fur Sie einen aussagekrafrigen Prufbericht zu erstellen"/>

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
                                    'value': 'myvalue3',
                                    'label': 'Label3'
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