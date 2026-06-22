import express from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './config/auth.js';
import { errorHandler } from './middleware/errorHandler.js';

// Route Imports
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

const app = express();

// Configure CORS to allow authorization headers and session cookies from client
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

// Better Auth endpoint mount (Must be placed before express.json() parser)
app.all("/api/auth/*splat", toNodeHandler(auth));

// Standard Body Parser
app.use(express.json());

// API route mounts
app.use('/api', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/payments', paymentRoutes);

app.get('/', (req, res) => {
  res.send('ReSell Hub Server is running..');
});

// Fallback Error Handler
app.use(errorHandler);

export default app;
