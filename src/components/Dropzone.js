import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import Description from "mineko-design/src/text/Description";

const uploaderStyle = {
    border: '1px dashed #979797',
    borderRadius: 4,
    backgroundColor: 'white',
    height: '100%',
    padding: 0
}
const textBlockStyle = {
    height: 85,
    lineHeight: 85,
    display: 'flex'
}

class DropzoneComponent extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
            this.setState({files})
        };
        this.state = {
            files: []
        };
    }

    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));

        return (
            <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                    <Container>
                        <ContainerItem gridSize={12} align="center" style={uploaderStyle}>
                            <div {...getRootProps()} style={textBlockStyle}>
                                <input {...getInputProps()} />
                                <Description headline="Hier klicken" description="Scan hochladen oder fotogradieren."/>
                            </div>
                            <div>
                                {/*<h4>Files</h4>*/}
                                <ul>{files}</ul>
                            </div>
                        </ContainerItem>
                    </Container>
                )}
            </Dropzone>
        );
    }
}
export default DropzoneComponent
