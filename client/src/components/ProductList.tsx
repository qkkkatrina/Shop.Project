// Shop.Project/client/src/components/ProductList.tsx
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; 
import '../App.css'; 
import './ProductCard.css'; 
import './ProductList.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image_url: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading-message">Загрузка товаров...</div>;
  }

  if (error) {
    return <div className="error-message">Ошибка: {error}</div>;
  }

  return (
    <div className="product-list-container">
      <h1 className="page-title">Наши Товары</h1>
      {products.length === 0 ? (
        <p className="no-products-message">Нет доступных товаров.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} /> 
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;