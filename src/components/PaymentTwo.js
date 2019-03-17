import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import Container from "mineko-design/src/layout/Container";
import Description from "mineko-design/src/text/Description";
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import Input from "mineko-design/src/inputs/Input";

class PaymentTwo extends Component {
    state = {
        route: '',
        prevRoute: 'payment',
        nextRoute: 'upload'
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-evenly' item>
                <Description align='left'
                             headline="Bezahlen per Kreditkarte"
                             description="Bitte tragen Sie Angaben Ihren Kreditkarte ein um die Bezahlung in Hohe  von 49$ abzuschlieBen."
                             item/>
                <Input type="number" label="Nummet:" name="test" fullWidth/>
                <Input type="text" label="Inhaber:" name="test" fullWidth/>

                <Buttons
                    onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                        this.routeChange()
                    })}
                    onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                        this.routeChange()
                    })}
                />
            </Container>
        )
    }
}

const Buttons = ({onClickPrev, onClickNext}) => (
    <ButtonGrid>
        <Button color="secondary"
                onClick={onClickPrev}>
            Zuruck
        </Button>
        <Button onClick={onClickNext}>
            Jetzt buchen & bezahlen
        </Button>
    </ButtonGrid>
);

export default withRouter(PaymentTwo)