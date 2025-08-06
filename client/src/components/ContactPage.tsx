// Shop.Project/client/src/components/ContactPage.tsx
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Контакты</h1>
      <div className="contact-info">
        <p>Мы всегда рады обратной связи!</p>
        <p>Пишите нам на почту: <strong>info@my-shop.com</strong></p>
        <p>Или звоните: <strong>+7 (123) 456-78-90</strong></p>
      </div>
    </div>
  );
};

export default ContactPage;