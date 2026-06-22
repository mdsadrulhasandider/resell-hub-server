import express from 'express';
import { createPaymentIntent, createPayment, getPayments } from '../controllers/paymentController.js';
import { verifyJWT } from '../middleware/verifyJWT.js';

const router = express.Router();

router.post('/create-payment-intent', verifyJWT, createPaymentIntent);
router.post('/payments', verifyJWT, createPayment);
router.get('/payments', verifyJWT, getPayments);

export default router;
