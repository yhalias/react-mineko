import React, {Component} from 'react'
import ButtonGrid from '../../node_modules/mineko-design/src/buttons/ButtonGrid'
import Button from '../../node_modules/mineko-design/src/buttons/Button'
import Container from '../../node_modules/mineko-design/src/layout/Container'
import ContainerItem from '../../node_modules/mineko-design/src/layout/ContainerItem'

import Description from '../../node_modules/mineko-design/src/text/Description'

class Contact extends Component {
    render() {
        return (
        <Container justify='space-between'>

            <ContainerItem gridSize={11} align='center'>
                123
            </ContainerItem>
            {/*<ContainerItem gridSize={4}>*/}
                {/*123*/}
            {/*</ContainerItem>*/}
        </Container>


                    //
                    // <Description headline="Cool headline" description="This text describes something"/>
                    //
                    // {/*<input type="text" placeholder="Vorname"/>*/}
                    // {/*<input type="text" placeholder="Nachname"/>*/}
                    // {/*<input type="text" placeholder="Strasse & Nr."/>*/}
                    // {/*<input type="text" placeholder="PLZ"/>*/}
                    // {/*<input type="text" placeholder="Ort"/>*/}
                    //
                    //
                    // <ButtonGrid>
                    //     <Button color="secondary">
                    //         seconday
                    //     </Button>
                    //     <Button>
                    //         primary
                    //     </Button>
                    // </ButtonGrid>


        )
    }

}


export default Contact