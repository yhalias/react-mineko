import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import {withRouter} from 'react-router-dom'
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import "../../styles/dropzone.css"
import UploadForm from "./forms/UploadForm";
import TextBanner from "mineko-design/src/trust/TextBanner";

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: '',
            prevRoute: 'payment',
            nextRoute: 'notes',
            files: [],
        };
    }

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <div>
                <TextBanner text='Herzlichen Dank fur die Bestellung. Laden Sie jetzt Ihre Unterlagen hoch.'/>

                <Container justify='space-between' item>

                    <ContainerItem gridSize={12}>

                        <UploadForm>
                            <Buttons
                                onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                                    this.routeChange()
                                })}
                                onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                                    this.routeChange()
                                })}
                            />
                        </UploadForm>

                    </ContainerItem>
                </Container>
            </div>

        )
    }

}

const Buttons = ({onClickPrev, onClickNext}) => (
    <ButtonGrid>
        <Button color="secondary"
                onClick={onClickPrev}>
            zuruck
        </Button>
        <Button onClick={onClickNext}>
            weiter
        </Button>
    </ButtonGrid>
);

export default withRouter(Upload)