import React, { useState, useEffect } from 'react';
import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymetForm';

import useStyles from './styles';

const steps = ['Shipping Address', 'Payment Details'];


const Checkout = ({cart}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id,{ type: 'cart' });

                setCheckoutToken(token);
            } catch (error) {
                
            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Confirmation = () => (
    <div>
        Confirmation
    </div>
    );

    const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next} /> 
    : <PaymentForm checkoutToken={checkoutToken} backStep={backStep} />
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
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>
        </main>            
        </>
    )
}

export default Checkout;