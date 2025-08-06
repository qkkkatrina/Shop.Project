// Shop.Project/client/src/components/Footer.tsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Мой Магазин. Все права защищены.</p>
    </footer>
  );
};

export default Footer;