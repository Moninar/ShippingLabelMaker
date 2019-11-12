import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';
import Buttons from './buttons';
import './pic2.css';


export default class Address extends Base {
    state = {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: ''
    };

    constructor(props) {
        super(props);
        this.contextKey = this.props.addressType === AddressType.receiver ? 'to' : 'from';

        this.state = {
            ...this.state,
            ...this.props.wizardContext[this.contextKey],
            displayError: false
        };
    }

    setValue() {
        this.props.wizardContext[this.contextKey] = {...this.state};
    }

    render() {
        const {addressType} = this.props;
        const addressTypeLabel = addressType === AddressType.receiver ? 'receiver' : 'sender';

        return (
            <div className='step-container'>
                <div className="header">
                    Enter the {addressTypeLabel}'s address:
                </div>
                <form noValidate onSubmit={this.onFormSubmit}
                      className={this.state.displayError ? 'displayErrors' : ''}>
                    <div>
                        <label className='col-1 col-form-label' htmlFor="name">Name:</label>
                        <div className="col-11">
                            <input type="text" value={this.state.name} onChange={e => this.setPropValue('name', e)}
                                   className='erow' placeholder='Name' id='name' required/>
                        </div>
                    </div>
                    <div>
                        <label className='col-1 col-form-label' htmlFor="street">Street:</label>
                        <div className="col-11">
                            <input type="text" value={this.state.street} onChange={e => this.setPropValue('street', e)}
                                   className='erow' placeholder='Street' id='street' required/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="city" className='col-1 col-form-label'>City:</label>
                        <div className="col-11">
                            <input type="text" className="erow" id="city" value={this.state.city}
                                   onChange={e => this.setPropValue('city', e)} required placeholder='City'/>
                        </div>
                        <label htmlFor="state" className='col-1 col-form-label'>State:</label>
                        <div className="col-11">
                            <input type="text" className="erow" id="state" value={this.state.state}
                                   onChange={e => this.setPropValue('state', e)} required placeholder='State'/>
                        </div>

                        <label htmlFor="zip" className="col-1 col-form-label">Zip:</label>
                        <div className="col-11">
                            <input type="text" className="erow" id="zip" value={this.state.zip}
                                   onChange={e => this.setPropValue('zip', e)} required placeholder='Zip'/>
                        </div>
                    </div>
                    <button type='submit' ref={btn => this.btnSubmit = btn} hidden={true}>must not be visible</button>
                </form>
                <Buttons onAction={this.localOnAction}/>
            </div>
        )
    }
}

Address.propTypes = {
    ...Base.propTypes,
    addressType: PropTypes.number.isRequired
};

export const AddressType = {
    sender: 1,
    receiver: 2
};
