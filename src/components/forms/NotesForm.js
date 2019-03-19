import React from 'react'
import {ContainerItem} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Textarea from "mineko-design/src/inputs/Textarea";

const NotesForm = ({children, gridSize, ...props}) => (
    <ContainerItem gridSize={gridSize}>

        <Description align='left' item
                     headline="Nebenkostenabrechnung fur die Prufung hochladen"
                     description="Haden Sie konkrete Fragen oder Hinweise zu Ihrer Abrechnung? Maximal 300 Zeichen. (optional)"/>

        <Textarea label="Ihr Hinweis..." fullWidth/>

        {children}

    </ContainerItem>
)

export default NotesForm;