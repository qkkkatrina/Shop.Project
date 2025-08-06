// Shop.Project/client/src/components/ProductCard.tsx
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image_url: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.image_url} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Цена: ${parseFloat(product.price).toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;