import React from 'react'
import {ContainerItem} from 'mineko-design/src/layout/index'
import H6 from "mineko-design/src/text/H6";
import RadioGroup from "mineko-design/src/buttons/RadioGroup";

const PaymentChoice = ({children, paymentOptionValue, onChangePaymentOption, ...props}) => (
    <ContainerItem gridSize={12} >

        <H6 align='left'>Wie mochten Sie bezahlen? </H6>

        <RadioGroup
            name='paymentOption'
            value={paymentOptionValue}
            onChange={onChangePaymentOption}
            items={[
                {
                    'value': 'paypal',
                    'label': 'PayPal',
                },
                {
                    'value': 'kreditkarte',
                    'label': 'Kreditarte',

                },
                {
                    'value': 'sofor',
                    'label': 'Sofortuberweisung'
                },
                {
                    'value': 'uber',
                    'label': 'Uberweisunng',

                },
                {
                    'value': 'crypto',
                    'label': 'Cryptowahrung (Bitcoin, Ether, Litecoin, Dash, XMR)',

                }
            ]}
        />

    </ContainerItem>

)

export default PaymentChoice;