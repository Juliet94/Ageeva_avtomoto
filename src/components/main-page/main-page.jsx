import React from 'react';
import styles from './main-page.module.scss';

import Header from '../header/header';
import Footer from '../footer/footer';
import AvtoInfo from '../avto-info/avto-info';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <h1 className="visually-hidden">
          Информация о автомобиле Марпех 11
        </h1>
        <AvtoInfo />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
