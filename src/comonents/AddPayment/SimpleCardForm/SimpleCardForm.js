import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = (handlePayment) => {
	const stripe = useStripe();
	const elements = useElements();
	const [paymentError, setPaymentError] = useState('');
	const [paymentSuccess, setPaymentSuccess] = useState('');

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
	
			return;
		}

		const cardElement = elements.getElement(CardElement);

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (error) {
			console.log('[error]', error);
			setPaymentSuccess(null);
			setPaymentError(error.message)
		} else {
			setPaymentSuccess(paymentMethod.id);
			setPaymentError(null)
			handlePayment(paymentMethod.id)
			console.log('[PaymentMethod]', paymentMethod);
		}
	};
	console.log(paymentError);
	console.log(paymentSuccess);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement />
				<button type="submit" disabled={!stripe}>
					Pay
      </button>
			</form>
			<div>
				{
					paymentError && <p style={{color:'red'}}>{paymentError}</p>
				}
				{
					paymentSuccess && <p style={{ color: 'green' }}> Your payment was succesfully</p>
				}
			</div>
		</div>
	);
};

export default SimpleCardForm;