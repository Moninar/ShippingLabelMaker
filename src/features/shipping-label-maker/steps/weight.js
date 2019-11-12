import React from 'react';
import Base from './base';
import Buttons from './buttons';
import './pic2.css';

export class Weight extends Base {
    state = {
        weight: 0
    };

    constructor(props) {
        super(props);

        this.state = {
            weight: this.props.wizardContext.weight || 1,
            displayError: false
        };
    }

    setValue() {
        this.props.wizardContext.weight = this.state.weight;
    }

    render() {
        return (
            <div className='step-container'>
                <div className="header">
                    What is package weight?
                </div>
                <form noValidate onSubmit={this.onFormSubmit}
                      className={this.state.displayError ? 'displayErrors' : ''}>
                    <div className="form-group row">
                        <label className='header' htmlFor="weight">Weight:</label>
                        
                        <div>
                            <input className='headd' type="number" value={this.state.weight} onChange={e => this.setPropValue('weight', e)}
                                  placeholder='Weight' id='weight' required/>
                        </div>
                    </div>
                    <button type='submit' ref={btn => this.btnSubmit = btn} hidden={true}>must not be visible</button>
                </form>
                <Buttons onAction={this.localOnAction}/>
            </div>
        )
    }
}
