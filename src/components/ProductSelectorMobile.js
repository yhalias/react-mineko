/*Payment first page Mobile*/
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {Container} from 'mineko-design/src/layout/index'
import ButtonGrid from "mineko-design/src/buttons/ButtonGrid";
import Button from "mineko-design/src/buttons/Button";
import ContainerItem from "mineko-design/src/layout/ContainerItem";
import H5 from "mineko-design/src/text/H5";
import RadioGroupLarge from "mineko-design/src/buttons/RadioGroupLarge";

class ProductSelectorMobile extends Component {
    state = {
        selectedProduct: '2',
        route: '',
        prevRoute: '/',
        nextRoute: 'contact',
    };

    routeChange() {
        this.props.history.push(this.state.route);
    }

    render() {
        return (
            <Container justify='space-between' item>
                <ContainerItem item>
                    <H5> In was fun einem Mietverhaltnis befinden Sie sich? </H5>
                </ContainerItem>

                <ContainerItem item>
                    <RadioGroupLarge
                        name="name"
                        value={this.state.selectedProduct}
                        isBordered={true}
                        isMobile={true}
                        onChange={e => this.setState({selectedProduct: e.target.value})}
                        items={[
                            {'value': '1', 'label': 'Meiter einen Wohnung',},
                            {'value': '2', 'label': 'Mieter einer Gewerbeflache'},
                            {'value': '3', 'label': 'Vermieter einer Wohnung'}
                        ]}
                    />
                </ContainerItem>

                <ContainerItem gridSize={12} style={{padding: '10px 5px 0px 0px'}}>
                    <Buttons
                        onClickNext={() => this.setState({route: this.state.nextRoute}, () => {
                            this.routeChange()
                        })}
                        onClickPrev={() => this.setState({route: this.state.prevRoute}, () => {
                            this.routeChange()
                        })}
                    />
                </ContainerItem>

                <ContainerItem/>
            </Container>
        )
    }
}

const Buttons = ({onClickPrev, onClickNext}) => (
    <div id='buttons-control'>
        <ButtonGrid>
            <Button color="secondary"
                    onClick={onClickPrev}>
                zuruck
            </Button>
            <Button onClick={onClickNext}>
                weiter
            </Button>
        </ButtonGrid>
    </div>
);

export default withRouter(ProductSelectorMobile)