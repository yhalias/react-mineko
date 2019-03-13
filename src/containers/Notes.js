import React, {Component} from 'react'
import {ButtonGrid,Button} from 'mineko-design/src/buttons/index'
import {ContainerItem, Container}from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Textarea from 'mineko-design/src/inputs/Textarea'

class Notes extends Component{
    render(){
        return(
            <Container justify='space-between' item>

                <ContainerItem gridSize={12}>

                    <Description align='left' item
                                 headline="Nebenkostenabrechnung fur die Prufung hochladen"
                                 description="Laden Sie hier Ihre Nebenkostenabrechnung hoch oder direkt mit dem Handy abfotografieren."/>

                    <ContainerItem gridSize={12}>
                        <Textarea label="Ihr Hinweis" fullWidth/>
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


export default Notes