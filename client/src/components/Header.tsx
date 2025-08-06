// Shop.Project/client/src/components/Header.tsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import './Header.css'; 

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link to="/" className="site-logo">Магазин</Link>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
        <div className="user-actions">
          <Link to="/cart" className="cart-link">Корзина ({totalItems})</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;