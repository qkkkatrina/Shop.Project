// Shop.Project/client/src/components/AboutPage.tsx
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">О нас</h1>
      <div className="about-content">
        <p>
          Привет! Мы — небольшой проект, созданный с большой любовью к технологиям и программированию.
          Наш магазин — это не просто место, где можно что-то купить, это результат увлекательного путешествия в мир React, TypeScript и Express.
        </p>
        <p>
          Каждый клик, каждая строчка кода была создана с мыслью о том, чтобы сделать что-то особенное.
          Спасибо, что заглянули!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;