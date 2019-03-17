import React from 'react'
import {ContainerItem, Container} from 'mineko-design/src/layout/index'
import Description from 'mineko-design/src/text/Description'
import Subtitle from "mineko-design/src/text/Subtitle";
import Label from "mineko-design/src/buttons/Label";
import RadioGroup from "mineko-design/src/buttons/RadioGroup";
import PaymentChoice from "../payments/PaymentChoice";

const PaymentForm = ({children, paymentOptionValue, onChangePaymentOption, ...props}) => (
    <Container justify='space-evenly' item>
        <ContainerItem xs={12} sm={12} item>
            <Description align='left' headline="Ihr gewahltes Prufpaket"
                         description="Wir freuen uns darauf Ihre Nebenkostenabrechung zu prufen und fur Sie einen aussagekrafrigen Prufbericht zu erstellen"
                         item/>

            <ContainerItem gridSize={12}>
                <Subtitle variant='subtitle2' align='left'>
                    Aktualles Prufaufkommen: <Label text='hoch'/>
                </Subtitle>
            </ContainerItem>
        </ContainerItem>

        <ContainerItem  xs={8} sm={8} item>
            <RadioGroup
                name='MyRadioGroup'
                value='myvalue'
                items={[
                    {
                        'value': 'myvalue',
                        'label': 'Mieter Wohnung Premium'
                    },

                ]}
            />
        </ContainerItem>

        <ContainerItem xs={4} sm={4} item>
            <Subtitle align='right'>
                69$
            </Subtitle>
        </ContainerItem>

        <PaymentChoice
            paymentOptionValue={paymentOptionValue}
            onChangePaymentOption={onChangePaymentOption}/>

        {children}
    </Container>
)

export default PaymentForm;