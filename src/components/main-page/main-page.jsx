import React from 'react';
import styles from './main-page.module.scss';

import Header from '../header/header';
import Footer from '../footer/footer';
import AvtoInfo from '../avto-info/avto-info';
import Slider from '../slider/slider';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner_wrapper}>
          <h1 className="visually-hidden">
            Информация об автомобиле Марпех 11
          </h1>
          <section className={styles.info}>
            <Slider />
            <AvtoInfo />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
