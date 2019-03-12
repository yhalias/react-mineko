import React, {Component} from 'react'
import ButtonGrid from '../../node_modules/mineko-design/src/buttons/ButtonGrid'
import Button from '../../node_modules/mineko-design/src/buttons/Button'
import Container from '../../node_modules/mineko-design/src/layout/Container'
import ContainerItem from '../../node_modules/mineko-design/src/layout/ContainerItem'
import Description from '../../node_modules/mineko-design/src/text/Description'


class Contact extends Component {
    actionNext() {
        console.log('next page')
    }

    render() {
        return (
            <Container justify='space-between' item>

                <ContainerItem gridSize={12} align='center'>

                    <Description align='left' headline="Ihre Kontaktdaten" description="Bitte tragen Sie Ihre Kontaktdaten ein."/>

                    <ContainerItem gridSize={12} align='center'>
                        <input  type="text" placeholder="Vorname"/>
                    </ContainerItem>
                    <ContainerItem gridSize={12} align='center'>
                        <input type="text" placeholder="Nachname"/>
                    </ContainerItem>
                    <ContainerItem gridSize={12} align='center'>
                        <input type="text" placeholder="Strasse & Nr."/>
                    </ContainerItem>
                    <ContainerItem gridSize={12} align='center'>
                        <input type="text" placeholder="PLZ"/>
                    </ContainerItem>
                    <ContainerItem gridSize={12} align='center'>
                        <input type="text" placeholder="Ort"/>
                    </ContainerItem>

                    <Description align='left' headline="E-Mail"
                                 description="Wie sind Sie wanrend de Prufund erreichbar? Das Prufergebnis erhalten Sie von uns per E-Mail."/>

                    <ContainerItem gridSize={12} align='center'>
                        <input type="text" placeholder="E-Mail"/>
                    </ContainerItem>

                    <ButtonGrid>
                        <Button color="secondary">
                            Zuruck
                        </Button>
                        <Button onClick={this.actionNext}>
                            Weiter
                        </Button>
                    </ButtonGrid>

                </ContainerItem>
            </Container>
        )
    }
}

export default Contact