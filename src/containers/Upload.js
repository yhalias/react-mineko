import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import {withRouter} from 'react-router-dom'
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Checkbox from 'mineko-design/src/checkboxes/Checkbox'
import DropzoneComponent from 'react-dropzone-component'
import "../../styles/dropzone.css"

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
                        <img data-dz-thumbnail="true" />
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
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

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

                    <Description align='left' item
                                 headline="Nebenkostenabrechnung fur die Prufung hochladen"
                                 description="Laden Sie hier Ihre Nebenkostenabrechnung hoch oder direkt mit dem Handy abfotografieren."/>

                    <ContainerItem gridSize={12}>
                        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                    </ContainerItem>

                    <ContainerItem gridSize={12} item>
                        <Checkbox label="spater hochladen"/>
                    </ContainerItem>

                    <Description align='left' item
                                 headline="Mietvertrag hochlladen"
                                 description="Mietverrag hochladen hoch oder mit dem Hand abfotografieren. Fun eine seriose Prufung benorigen wie den Mietvertrag."/>

                    <ContainerItem gridSize={12}>
                        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                    </ContainerItem>
                    <ContainerItem gridSize={12} item>
                        <Checkbox label="spater hochladen"/>
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