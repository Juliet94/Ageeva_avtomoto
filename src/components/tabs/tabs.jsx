import React, {useState} from 'react';
import styles from './tabs.module.scss';
import classNames from 'classnames';

import Specs from '../specs/specs';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

const TabNames = {
  SPECS: 'specs',
  REVIEWS: 'reviews',
  CONTACTS: 'contacts',
};

function Tabs() {
  const [activeTab, setActiveTab] = useState(TabNames.SPECS);

  const onSpecsButtonClick = () => {
    if (activeTab !== TabNames.SPECS) {
      setActiveTab(TabNames.SPECS);
    }
  };

  const onReviewsButtonClick = () => {
    if (activeTab !== TabNames.REVIEWS) {
      setActiveTab(TabNames.REVIEWS);
    }
  };

  const onContactsButtonClick = () => {
    if (activeTab !== TabNames.CONTACTS) {
      setActiveTab(TabNames.CONTACTS);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.button_wrapper}>
        <button
          className={classNames(styles.button, {[styles.button_active]: activeTab === TabNames.SPECS})}
          type="button"
          onClick={onSpecsButtonClick}
        >
          Характеристики
        </button>
        <button
          className={classNames(styles.button, {[styles.button_active]: activeTab === TabNames.REVIEWS})}
          type="button"
          onClick={onReviewsButtonClick}
        >
          Отзывы
        </button>
        <button
          className={classNames(styles.button, {[styles.button_active]: activeTab === TabNames.CONTACTS})}
          type="button"
          onClick={onContactsButtonClick}
        >
          Контакты
        </button>
      </div>
      {activeTab === TabNames.SPECS && <Specs />}
      {activeTab === TabNames.REVIEWS && <Reviews />}
      {activeTab === TabNames.CONTACTS && <Contacts />}
    </div>
  );
}

export default Tabs;
