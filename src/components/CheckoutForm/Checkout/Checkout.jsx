import React, { useState }   from 'react'
import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core'

import useStyles from './styles';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />
    return (
        <>
        <div className={classes.toolbar}></div>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={0} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </main>            
        </>
    )
}

export default Checkout
