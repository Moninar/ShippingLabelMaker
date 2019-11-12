import React from 'react';
import Base from './base';
import Buttons from './buttons';
import {ShippingOption} from "../../../core/components/wizard/constants";
import './pic2.css';
export class StepShippingOption extends Base {
    state = {
        shippingOption: ShippingOption.ground
    };

    constructor(props) {
        super(props);

        this.state = {
            shippingOption: this.props.wizardContext.shippingOption || ShippingOption.ground,
            displayError: false
        };
    }

    setValue() {
        this.props.wizardContext.shippingOption = this.state.shippingOption;
    }

    render() {
        return (
            <div className='step-container'>
                <div className="header">
                    Enter the shipping option:
                </div>
                <form noValidate onSubmit={this.onFormSubmit}
                      className={this.state.displayError ? 'displayErrors' : ''}>
                    <div>
                        <label className='header' htmlFor="shipping-option">Shipping option:</label>
                        <div>
                            <select value={this.state.shippingOption} onChange={e => this.setPropValue('shippingOption', e)}
                                     placeholder='Shipping Option' id='shipping-option'
                                    required>
                                <option value={ShippingOption.ground}>Ground</option>
                                <option value={ShippingOption.priority}>Priority</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' ref={btn => this.btnSubmit = btn} hidden={true}>must not be visible</button>
                </form>
                <Buttons onAction={this.localOnAction}/>
            </div>
        )
    }
}
