import React from 'react'
import {ContainerItem} from 'mineko-design/src/layout/index'
import H6 from "mineko-design/src/text/H6";
import RadioGroup from "mineko-design/src/buttons/RadioGroup";
import Paypal from "mineko-design/src/icons/Paypal";
import VisaMasterCard from "mineko-design/src/icons/VisaMasterCard";
import Sofort from "mineko-design/src/icons/Sofort";

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
                    'icon' : <Paypal height={20} width={60}/>
                },
                {
                    'value': 'kreditkarte',
                    'label': 'Kreditarte',
                    'icon' : <VisaMasterCard height={20} width={60}/>

                },
                {
                    'value': 'sofor',
                    'label': 'Sofortuberweisung',
                    'icon' : <Sofort height={20} width={60}/>
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