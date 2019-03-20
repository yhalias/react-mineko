import React from 'react'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Checkbox from 'mineko-design/src/checkboxes/Checkbox'
import Dropzone from "../Dropzone";

const UploadForm = ({children, ...props}) => (
    <Container justify='space-between' item>
        <ContainerItem gridSize={12}>

            <Description align='left' item
                         headline="Nebenkostenabrechnung fur die Prufung hochladen"
                         description="Laden Sie hier Ihre Nebenkostenabrechnung hoch oder direkt mit dem Handy abfotografieren."/>

            <ContainerItem gridSize={12}>
                <Dropzone/>
            </ContainerItem>

            <ContainerItem gridSize={12} item>
                <Checkbox label="spater hochladen"/>
            </ContainerItem>

            <Description align='left' item
                         headline="Mietvertrag hochlladen"
                         description="Mietverrag hochladen hoch oder mit dem Hand abfotografieren. Fun eine seriose Prufung benorigen wie den Mietvertrag."/>

            <ContainerItem gridSize={12}>
                <Dropzone />
            </ContainerItem>
            <ContainerItem gridSize={12} item>
                <Checkbox label="spater hochladen"/>
            </ContainerItem>

            {children}

        </ContainerItem>
    </Container>
)

export default UploadForm;