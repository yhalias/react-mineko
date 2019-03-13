import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: '',
            prevRoute: 'payment',
            nextRoute: 'notes',
        };
    }

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-between' item>


                <ContainerItem gridSize={12} align='center'>

                    <Description align='left'
                                 headline="Nebenkostenabrechnung fur die Prufung hochladen"
                                 description="Laden Sie hier Ihre Nebenkostenabrechnung hoch oder direkt mit dem Handy abfotografieren."/>

                    <ContainerItem gridSize={12} align='center'>
                        TEXTAREA
                    </ContainerItem>

                    <ContainerItem gridSize={12} align='center'>
                        CHECKBOX
                    </ContainerItem>

                    <Description align='left'
                                 headline="Mietvertrag hochlladen"
                                 description="Mietverrag hochladen hoch oder mit dem Hand abfotografieren. Fun eine seriose Prufung benorigen wie den Mietvertrag."/>

                    <ContainerItem gridSize={12} align='center'>
                        TEXTAREA
                    </ContainerItem>
                    <ContainerItem gridSize={12} align='center'>
                        CHECKBOX
                    </ContainerItem>

                    <ButtonGrid>
                        <Button color="secondary" onClick={() => this.setState({route: this.state.prevRoute}, () => {
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

export default withRouter(Upload)