import React from 'react';
import {WizardAction} from "../../../core/components/wizard/constants";
import './pic2.css';

export default ({onAction}) => {
    return (
        <div className="step-prev-next">
            <button className='btn' onClick={() => onAction(WizardAction.prev)}>Previous</button>
            <button className='btn' onClick={() => onAction(WizardAction.next)}>Next</button>
        </div>
    )
}
