import React from 'react'
import {ContainerItem} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Textarea from "mineko-design/src/inputs/Textarea";

const NotesForm = ({children, gridSize, ...props}) => (
    <ContainerItem gridSize={gridSize}>

        <Description align='left' item
                     headline="Nebenkostenabrechnung fur die Prufung hochladen"
                     description="Laden Sie hier Ihre Nebenkostenabrechnung hoch oder direkt mit dem Handy abfotografieren."/>

        <ContainerItem gridSize={12}>
            <Textarea label="Ihr Hinweis..." fullWidth/>
        </ContainerItem>

        {children}

    </ContainerItem>
)

export default NotesForm;