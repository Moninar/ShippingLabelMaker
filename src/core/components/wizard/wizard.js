import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './pic.css';

import {WizardAction} from "./constants";

class Wizard extends Component {
    state = {
        step: -1,
        completed: false
    };

    constructor(props) {
        super(props);

        this.localSteps = React.Children.map(props.steps, step =>
            React.cloneElement(step, {onAction: this.onHandle}));
        if (this.localSteps.length) {
            this.state.step = 0;
        }
    }

    onHandle = action => {
        let {step} = this.state;
        switch (action) {
            case WizardAction.next:
                if (step + 1 < this.localSteps.length) {
                    step++;
                } else {
                    this.props.onComplete();
                    this.setState({completed: true});
                    return;
                }
                break;
            case WizardAction.prev:
                if (step - 1 >= 0) {
                    step--;
                }
                break;
            default:
                break;
        }

        this.setState({step});
    };

    getProgressBarStyle = () => {
        const {steps} = this.props;
        return {
            width: (steps.length ? ((this.state.step + 1) / steps.length * 100.0) : 0) + '%'
        }
    };

    render() {
        if (this.state.completed) {
            return (<div/>);
        }

        const {header} = this.props;
        const step = this.state.step !== -1 ? this.localSteps[this.state.step] : null;
        return (
            <div className='card wizard'>
                <div className="card-body">
                    <div className="wizard-container">
                        <div className="wizard-title">
                            {header()}
                        </div>
                        <div className="wizard-progress-bar">
                            <div className="outer">
                                <div className="inner" style={this.getProgressBarStyle()}>

                                </div>
                            </div>
                        </div>
                        <div className="wizard-steps-container">
                            {step}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Wizard.defaultProps = {
    steps: [],
};

Wizard.propTypes = {
    header: PropTypes.func.isRequired,
    steps: PropTypes.arrayOf(PropTypes.object).isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
};

export default Wizard;
