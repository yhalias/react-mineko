import React from 'react'
import {ContainerItem} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Input from 'mineko-design/src/inputs/Input'
import Checkbox from 'mineko-design/src/checkboxes/Checkbox'

const ContactForm = ({children, ...props}) => (
    <ContainerItem gridSize={12}>
        <Description align='left'
                     headline="Ihre Kontaktdaten"
                     description="Bitte tragen Sie Ihre Kontaktdaten ein."
                     item/>

        <Input type="text" label="Vorname" name="test" fullWidth/>
        <Input type="text"
               label="Nachname"
               name="test" fullWidth
               aria-describedby="component-error-text"/>
        <Input type="text" label="Strasse & Nr."
               isError={true}
               errorText="Error text"
               name="test" fullWidth/>
        <Input type="text" label="PLZ" name="test" fullWidth/>
        <Input type="text" label="Ort" name="test" fullWidth/>

        <Description align='left' headline="E-Mail"
                     description="Wie sind Sie wanrend de Prufund erreichbar? Das Prufergebnis erhalten Sie von uns per E-Mail."
                     item/>

        <Input type="email" label="E-Mail" name="email" fullWidth/>

        <Checkbox label="Ja, ich akzeptiere die AGB und Bestimmungen zum Datenschuts."/>

        {children}

        <ContainerItem/>
    </ContainerItem>
)

export default ContactForm;