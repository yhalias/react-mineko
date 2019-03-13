import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Input from 'mineko-design/src/inputs/Input'
import Checkbox from 'mineko-design/src/checkboxes/Checkbox'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: '',
            prevRoute: '/',
            nextRoute: 'payment',
        };
    }

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-between' item>

                <ContainerItem gridSize={12}>

                    <Description align='left'
                                 headline="Ihre Kontaktdaten"
                                 description="Bitte tragen Sie Ihre Kontaktdaten ein."
                                 item/>

                    <ContainerItem gridSize={12}>
                        <Input type="text" label="Vorname" name="test" fullWidth/>
                    </ContainerItem>
                    <ContainerItem gridSize={12}>
                        <Input type="text" label="Nachname" name="test" fullWidth/>
                    </ContainerItem>
                    <ContainerItem gridSize={12}>
                        <Input type="text" label="Strasse & Nr." name="test" fullWidth/>
                    </ContainerItem>
                    <ContainerItem gridSize={12}>
                        <Input type="text" label="PLZ" name="test" fullWidth/>
                    </ContainerItem>
                    <ContainerItem gridSize={12}>
                        <Input type="text" label="Ort" name="test" fullWidth/>
                    </ContainerItem>

                    <Description align='left' headline="E-Mail"
                                 description="Wie sind Sie wanrend de Prufund erreichbar? Das Prufergebnis erhalten Sie von uns per E-Mail."
                                 item/>

                    <ContainerItem gridSize={12}>
                        <Input type="email" label="E-Mail" name="email" fullWidth/>
                    </ContainerItem>

                    <ContainerItem gridSize={12} item>
                        <Checkbox label="Ja, ich akzeptiere die AGB und Bestimmungen zum Datenschuts."/>
                    </ContainerItem>

                    <ButtonGrid>
                        <Button color="secondary"
                                onClick={() => this.setState({route: this.state.prevRoute}, () => {
                                    this.routeChange()
                                })}>
                            Zuruck
                        </Button>
                        <Button onClick={() => this.setState({route: this.state.nextRoute}, () => {
                            this.routeChange()
                        })}>
                            Weiter
                        </Button>
                    </ButtonGrid>

                </ContainerItem>
            </Container>
        )
    }
}

export default withRouter(Contact)