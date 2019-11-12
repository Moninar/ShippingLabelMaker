import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {shippingCost} from "../../../core/components/wizard/rate";
import './la.css'
export default class ShippingLabel extends Component {

    render() {
        const {wizardContext} = this.props;

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                               This is the Shipping label for you!
                            </div>
                            <div className="card-body">
                                <h3>Cost: ${shippingCost(wizardContext.weight, wizardContext.shippingOption)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ShippingLabel.propTypes = {
    wizardContext: PropTypes.object.isRequired
};


