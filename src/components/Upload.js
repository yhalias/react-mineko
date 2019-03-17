import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import {withRouter} from 'react-router-dom'
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import "../../styles/dropzone.css"
import UploadForm from "./forms/UploadForm";

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: '',
            prevRoute: 'payment',
            nextRoute: 'notes',
            files: [],
        };

        // For a full list of possible configurations,
        // please consult http://www.dropzonejs.com/#configuration
        this.djsConfig = {
            previewTemplate: ReactDOMServer.renderToStaticMarkup(
                <div className="dz-preview dz-file-preview">
                    <div className="dz-details">
                        <div className="dz-filename"><span data-dz-name="true"></span></div>
                        <img data-dz-thumbnail="true"/>
                    </div>
                    <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
                    <div className="dz-success-mark"><span>✔</span></div>
                    <div className="dz-error-mark"><span>✘</span></div>
                    {/*<div className="dz-error-message"><span data-dz-errormessage="true"></span></div>*/}
                </div>
            )
        }

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: false,
            postUrl: '/'
        };

        // If you want to attach multiple callbacks, simply
        // create an array filled with all your callbacks.
        this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

        // Simple callbacks work too, of course
        this.callback = () => console.log('Hello!');
        this.success = file => console.log('uploaded', file);
        this.removedfile = file => console.log('removing...', file);
        this.dropzone = null;
    }

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            drop: this.callbackArray,
            addedfile: this.callback,
            success: this.success,
            removedfile: this.removedfile
        }

        return (
            <Container justify='space-between' item>

                <ContainerItem gridSize={12}>

                    <UploadForm config={this.componentConfig}
                                djsConfig={this.djsConfig}
                                eventHandlers={eventHandlers}>
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
        )
    }

}

const Buttons = ({onClickPrev, onClickNext}) => (
    <ButtonGrid>
        <Button color="secondary"
                onClick={onClickPrev}>
            Zuruck
        </Button>
        <Button onClick={onClickNext}>
            Weiter
        </Button>
    </ButtonGrid>
);

export default withRouter(Upload)