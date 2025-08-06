// Shop.Project/client/src/components/ProductDetail.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

// Определение интерфейса для продукта
interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>(); // Получаем ID из URL
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
          console.error('Failed to fetch product:', e);
        } else {
          setError('An unknown error occurred');
          console.error('Failed to fetch product:', e);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); 

  if (loading) {
    return <div className="product-detail">Loading product details...</div>;
  }

  if (error) {
    return <div className="product-detail">Error: {error}</div>;
  }

  if (!product) {
    return <div className="product-detail">Product not found.</div>;
  }

const handleAddToCart = () => {
    if (product) {
        addToCart(product, 1);
        alert(`${product.title} добавлен в корзину!`); 
    }
};

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src={product.image_url} alt={product.title} className="detail-image" />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">Цена: ${parseFloat(product.price).toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default ProductDetail;