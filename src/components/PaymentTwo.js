import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import Container from "mineko-design/src/layout/Container";
import Description from "mineko-design/src/text/Description";
import {ButtonGrid, Button} from 'mineko-design/src/buttons/index'
import Input from "mineko-design/src/inputs/Input";
import SelectDropdown from "mineko-design/src/inputs/SelectDropdown";
import ContainerItem from "mineko-design/src/layout/ContainerItem";
import Subtitle from "mineko-design/src/text/Subtitle";
import CVV from "mineko-design/src/icons/CVV";

let monthArray = [];
let years = [];

for (let i = 1; i <= 12; i++) {
    monthArray.push(i);
}
for (let i = 19; i <= 30; i++) {
    years.push(i);
}

class PaymentTwo extends Component {
    state = {
        route: '',
        prevRoute: 'payment',
        nextRoute: 'upload',
        selectedMonth: 1,
        selectedYear: 1,
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

                    <ContainerItem gridSize={2}>
                        <Subtitle align='right'>
                            Nummer:
                        </Subtitle>
                    </ContainerItem>

                    <ContainerItem gridSize={10}>
                        <Input type="number" name="nummer" fullWidth/>
                    </ContainerItem>

                    <ContainerItem gridSize={2}>
                        <Subtitle align='right'>
                            Inhaber:
                        </Subtitle>
                    </ContainerItem>

                    <ContainerItem gridSize={10}>
                        <Input type="number" name="nummer" fullWidth/>
                    </ContainerItem>

                    <ContainerItem gridSize={2}>
                        <Subtitle align='right'>
                            gultig bis:
                        </Subtitle>
                    </ContainerItem>
                    <ContainerItem gridSize={10}>
                        <SelectDropdown
                            value={this.state.selectedYear}
                            items={monthArray}
                            onChange={e => this.setState({selectedYear: e.target.value})}
                        />
                        <SelectDropdown
                            value={this.state.selectedMonth}
                            items={years}
                            onChange={e => this.setState({selectedMonth: e.target.value})}
                        />
                    </ContainerItem>


                    <ContainerItem gridSize={2}>
                        <Subtitle align='right'>
                            CVV
                        </Subtitle>
                    </ContainerItem>
                    <ContainerItem gridSize={2} item>
                        <Input type="number" name="nummer"  placeholder="Ort" />
                    </ContainerItem>
                    <ContainerItem gridSize={8}>
                        <CVV width={216} height={32}/>
                    </ContainerItem>

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
            zuruck
        </Button>
        <Button onClick={onClickNext}>
            jetzt buchen & bezahlen
        </Button>
    </ButtonGrid>
);

export default withRouter(PaymentTwo)