import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Textarea from 'mineko-design/src/inputs/Textarea'

class Notes extends Component {
    state = {
        route: '',
        prevRoute: 'upload',
        nextRoute: '/',
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-between' item>

                <ContainerItem gridSize={12}>

                    <Description align='left' item
                                 headline="Nebenkostenabrechnung fur die Prufung hochladen"
                                 description="Laden Sie hier Ihre Nebenkostenabrechnung hoch oder direkt mit dem Handy abfotografieren."/>

                    <ContainerItem gridSize={12}>
                        <Textarea label="Ihr Hinweis" fullWidth/>
                    </ContainerItem>

                    <ContainerItem gridSize={12}>
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


                </ContainerItem>

            </Container>
        )
    }
}

export default withRouter(Notes)