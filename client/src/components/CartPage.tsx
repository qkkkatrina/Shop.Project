// Shop.Project/client/src/components/CartPage.tsx
import { useCart } from '../context/CartContext';
import './CartPage.css'; 

function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="page-title">Корзина</h1>
        <p>Ваша корзина пуста.</p>
      </div>
    );
  }

const handleCheckout = async () => {
  if (cart.length === 0) {
    alert('Ваша корзина пуста.');
    return;
  }

  const orderData = {
    items: cart.map(item => ({
      productId: item.id,
      quantity: item.quantity,
      price: parseFloat(item.price)
    })),
    totalAmount: getCartTotal()
  };

  try {
    const response = await fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      throw new Error('Failed to create order.');
    }

    const result = await response.json();
    alert(`Заказ #${result.order.id || 'N/A'} успешно оформлен!`);
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Произошла ошибка при оформлении заказа.');
  }
};

  return (
    <div className="cart-container">
      <h1 className="page-title">Корзина</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image_url} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Цена: ${parseFloat(item.price).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">Удалить</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Итого: ${getCartTotal().toFixed(2)}</h3>
        <button className="checkout-button" onClick={handleCheckout}>Оформить заказ</button>
      </div>
    </div>
  );
}

export default CartPage;