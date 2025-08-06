// Shop.Project/server/src/api/controllers/order.controller.ts
import { Request, Response } from 'express';

interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

interface OrderData {
  items: OrderItem[];
  totalAmount: number;
}

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { items, totalAmount }: OrderData = req.body;


    console.log('Received new order:');
    console.log('Items:', items);
    console.log('Total Amount:', totalAmount);

    res.status(201).json({
      message: 'Order created successfully!',
      order: { items, totalAmount, date: new Date() }
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};