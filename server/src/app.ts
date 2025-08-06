// Shop.Project/server/src/app.ts

import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import orderRoutes from './api/routes/order.routes';
import productRoutes from './api/routes/product.routes';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors()); 

app.use('/api/products', productRoutes);

app.use('/api/orders', orderRoutes);

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

app.get('/admin/test', (req: Request, res: Response) => {
  res.send('Admin panel is working!');
});


app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('*', (req: Request, res: Response) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/admin')) {
    return res.status(404).send('Not Found');
  }
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});


export default app;