import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
  getSteps,
  stepAction,
} from './actions';

import {
  ORDER_NEXT_STEP,
  ORDER_CANCEL_STEP,
  ORDER_PREVIOUS_STEP,
} from './constants';


import { activeStepSelector } from './selectors';

import SelectZone from './SelectZone';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

/*function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}//*/
const getStepContent = (index) => {
  switch(index){
    case 0:
      return (<SelectZone/>);
    default:
    return "Under development";
  }
}

class Order extends Component {

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const activeStep = this.props.ACTIVE_STEP;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.props.stepAction(ORDER_PREVIOUS_STEP)}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.props.stepAction(ORDER_NEXT_STEP)}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.props.stepAction(ORDER_CANCEL_STEP)} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

Order.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector ({
  ACTIVE_STEP: activeStepSelector()
});

const mapDispatchToProps = dispatch => {
return {
  stepAction: (type) => (e) => dispatch(stepAction(type)),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Order));
