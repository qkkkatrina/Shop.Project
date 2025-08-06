// Shop.Project/server/src/api/models/product.model.ts
import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import pool from '../../config/db';
import { IProduct } from '../../types';

interface ProductModel {
  findAll(): Promise<IProduct[]>;
  findById(id: number): Promise<IProduct | null>;
  create(product: Omit<IProduct, 'id' | 'created_at' | 'updated_at'>): Promise<number>; // Возвращает ID созданного продукта
  update(id: number, product: Partial<Omit<IProduct, 'id' | 'created_at' | 'updated_at'>>): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}

const Product: ProductModel = {
  async findAll(): Promise<IProduct[]> {
    const [rows] = await pool.query<IProduct[] & RowDataPacket[]>('SELECT * FROM products');
    return rows;
  },

  async findById(id: number): Promise<IProduct | null> {
    const [rows] = await pool.query<IProduct[] & RowDataPacket[]>('SELECT * FROM products WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
  },

  async create(productData): Promise<number> {
    const { title, description, price, image_url } = productData;
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO products (title, description, price, image_url) VALUES (?, ?, ?, ?)',
      [title, description, price, image_url]
    );
    return result.insertId;
  },

  async update(id: number, productData): Promise<boolean> {
    const { title, description, price, image_url } = productData;
    const [result] = await pool.query<ResultSetHeader>(
      'UPDATE products SET title = ?, description = ?, price = ?, image_url = ? WHERE id = ?',
      [title, description, price, image_url, id]
    );
    return result.affectedRows > 0;
  },

  async delete(id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

export default Product;