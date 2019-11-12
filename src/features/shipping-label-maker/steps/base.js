import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WizardAction} from "../../../core/components/wizard/constants";

export default class Base extends Component{
    state = {};

    setPropValue = (propName, event) => {
        const { target: { value } } = event;
        this.setState({[propName]: value});
    };

    localOnAction = action => {
        if (action === WizardAction.next) {
            this.btnSubmit.click();
        } else {
            this.setValue(); // remember values no matter what if we go back
            this.props.onAction(action);
        }
    };

    onFormSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        if (!e.target.checkValidity()) {
            this.setState({displayError: true});
            return;
        }

        this.setState({displayError: false});

        this.setValue();
        this.props.onAction(WizardAction.next);
    };

    setValue() {
        throw new Error("Not Implemented in base class");
    }

    render() {
        return (<div/>);
    }
}

Base.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};


