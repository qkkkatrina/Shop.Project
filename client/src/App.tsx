// Shop.Project/client/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext';
import './App.css';
import CartPage from './components/CartPage';

import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <CartProvider>
      <div className="App">
        <Header /> 
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPage />} /> {/* Новый маршрут */}
            <Route path="/contact" element={<ContactPage />} /> {/* Новый маршрут */}
            <Route path="/cart" element={<CartPage />} /> {/* Новый маршрут */}
            <Route path="*" element={<h1>404: Страница не найдена</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;