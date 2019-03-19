import React from 'react'
import {ContainerItem} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Input from 'mineko-design/src/inputs/Input'
import Checkbox from 'mineko-design/src/checkboxes/Checkbox'

const spanStyle = {
    textDecoration: 'underline'
}

const ContactForm = ({children, classes, ...props}) => (
    <ContainerItem gridSize={12}>
        <Description align='left'
                     headline="Ihre Kontaktdaten"
                     description="Bitte tragen Sie Ihre Kontaktdaten ein."
                     item/>

        <Input type="text" label="Vorname" name="test"/>
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

        <Checkbox label={(
            <label>
                Ja, ich akzeptiere die <span style={spanStyle}
                                             onClick={() => console.log('AGB Action')}>AGB</span> und
                Bestimmungen zum <span style={spanStyle}
                                       onClick={() => console.log('Datenschuts Action')}>Datenschuts</span>
            </label>
        )}/>

        {children}

        <ContainerItem/>
    </ContainerItem>
)

export default ContactForm;