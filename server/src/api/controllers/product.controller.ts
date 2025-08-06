// Shop.Project/server/src/api/controllers/product.controller.ts
import { Request, Response } from 'express';
import Product from '../models/product.model';
import { IProduct } from '../../types';

const productController = {
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error: any) {
      console.error('Error fetching all products:', error);
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  },

  getProductById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(Number(id));
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error: any) {
      console.error('Error fetching product by ID:', error);
      res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
  },

  createProduct: async (req: Request, res: Response) => {
    try {
      const newProduct: Omit<IProduct, 'id' | 'created_at' | 'updated_at'> = req.body;
      if (!newProduct.title || !newProduct.price) {
        return res.status(400).json({ message: 'Title and price are required' });
      }
      const productId = await Product.create(newProduct);
      res.status(201).json({ id: productId, message: 'Product created successfully' });
    } catch (error: any) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Error creating product', error: error.message });
    }
  },

  updateProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const productData: Partial<Omit<IProduct, 'id' | 'created_at' | 'updated_at'>> = req.body;
      const success = await Product.update(Number(id), productData);
      if (success) {
        res.json({ message: 'Product updated successfully' });
      } else {
        res.status(404).json({ message: 'Product not found or no changes made' });
      }
    } catch (error: any) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Error updating product', error: error.message });
    }
  },

  deleteProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const success = await Product.delete(Number(id));
      if (success) {
        res.status(204).send(); 
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error: any) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
  },
};

export default productController;