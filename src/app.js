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
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.CLIENT_URL, // Production client URL (set in Render env vars)
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
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

app.get('/api/db-seed', async (req, res, next) => {
  try {
    const { getDb } = await import('./config/db.js');
    const db = getDb();
    
    // Mock Products
    const mockProducts = [
      {
        title: "iPhone 14 Pro Max (128GB, Space Black)",
        category: "mobile phones",
        condition: "excellent",
        price: 799,
        images: ["https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=600&auto=format&fit=crop"],
        description: "Selling my iPhone 14 Pro Max in excellent condition. Battery health is at 94%. No scratches, always kept in a case with a screen protector. Includes original box and charging cable.",
        sellerId: "648e89f07b1a238f4d99c42b",
        sellerInfo: {
          name: "Sadrul Hasan",
          email: "sadrul@seller.com",
          verified: true,
          phone: "+1 (555) 123-4567",
          location: "Dhaka, Bangladesh"
        },
        status: "available",
        createdAt: new Date()
      },
      {
        title: "MacBook Pro 14\" M1 Pro (16GB/512GB)",
        category: "electronics",
        condition: "excellent",
        price: 1199,
        images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop"],
        description: "MacBook Pro 14-inch with M1 Pro chip, 8-core CPU, 14-core GPU, 16GB RAM, and 512GB SSD. Perfect condition, used only for office tasks. AppleCare valid until end of year.",
        sellerId: "648e89f07b1a238f4d99c42b",
        sellerInfo: {
          name: "Sadrul Hasan",
          email: "sadrul@seller.com",
          verified: true,
          phone: "+1 (555) 123-4567",
          location: "Dhaka, Bangladesh"
        },
        status: "available",
        createdAt: new Date()
      },
      {
        title: "Sony WH-1000XM4 Wireless Headphones",
        category: "electronics",
        condition: "good",
        price: 180,
        images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop"],
        description: "Sony WH-1000XM4 active noise canceling headphones in black. Works perfectly, cushions are clean. Includes carrying case, headphone cable, and USB-C charging cord.",
        sellerId: "648e89f07b1a238f4d99c42c",
        sellerInfo: {
          name: "Mousumi Akter",
          email: "mousumi@seller.com",
          verified: true,
          phone: "+1 (555) 987-6543",
          location: "Sylhet, Bangladesh"
        },
        status: "available",
        createdAt: new Date()
      }
    ];

    await db.collection('products').deleteMany({});
    const result = await db.collection('products').insertMany(mockProducts);
    
    res.json({
      success: true,
      message: `Database successfully seeded with ${result.insertedCount} products!`,
    });
  } catch (err) {
    next(err);
  }
});

app.get('/', (req, res) => {
  res.send('ReSell Hub Server is running..');
});

// Fallback Error Handler
app.use(errorHandler);

export default app;
