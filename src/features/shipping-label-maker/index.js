import React, {Component} from 'react';
import Wizard from "../../core/components/wizard/wizard";
import Address, {AddressType} from './steps/address';
import {Weight} from "./steps/weight";
import {StepShippingOption} from "./steps/shipping-option";
import ShippingLabel from "./label";

class ShippingLabelMaker extends Component {
    wizardContext = {
        from: {},
        to: {},
        weight: 0,
        shippingOption: 0
    };

    steps = [
        <Address wizardContext={this.wizardContext} addressType={AddressType.receiver} onAction={() => {}}/>,
        <Address wizardContext={this.wizardContext} addressType={AddressType.sender} onAction={() => {}}/>,
        <Weight wizardContext={this.wizardContext} onAction={() => {}}/>,
        <StepShippingOption wizardContext={this.wizardContext} onAction={() => {}}/>,
    ];

    state = {
        wizardCompleted: false
    };

    wizardOnComplete = () => {
        this.setState({wizardCompleted: true});
    };

    wizardHeader = () => {
        return "Shipping Label Maker";
    };

    render() {

        if (this.state.wizardCompleted) {
            return (<ShippingLabel wizardContext={this.wizardContext} />);
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Wizard header={this.wizardHeader} steps={this.steps}
                                wizardContext={this.context} onComplete={this.wizardOnComplete}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShippingLabelMaker;