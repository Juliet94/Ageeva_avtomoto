import React, {useState} from 'react';
import classNames from 'classnames';
import styles from './slider.module.scss';

import photoCar from '../../assets/images/slider-car.jpg';
import photoCabin from '../../assets/images/slider-cabin.jpg';
import photoSpeedo from '../../assets/images/slider-speedo.jpg';

const DEFAULT_PHOTO_INDEX = 0;
const MAX_PHOTO_INDEX = 2;
const PHOTO_CHANGE_STEP = 1;

const photos = [photoCar, photoCabin, photoSpeedo];

function Slider() {
  const [activePhoto, setActivePhoto] = useState(DEFAULT_PHOTO_INDEX);

  const onLeftButtonClick = () => {
    setActivePhoto(() => activePhoto - PHOTO_CHANGE_STEP);
  };

  const onRightButtonClick = () => {
    setActivePhoto(() => activePhoto + PHOTO_CHANGE_STEP);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>
        New model
      </span>
      <img className={styles.full_photo} src={photos[activePhoto]} width="600" height="375" alt="Полноразмерное фото из превью"/>
      <div className={styles.inner_wrapper}>
        <button
          className={classNames(styles.button, styles.button_left)}
          type="button"
          aria-label="Пролистать слайд влево"
          onClick={onLeftButtonClick}
          disabled={activePhoto === DEFAULT_PHOTO_INDEX}
        />
        <div className={styles.img_wrapper}>
          <img src={photoCar} width="128" height="80" alt="Фотография машины" />
          <img src={photoCabin} width="128" height="80" alt="Фотография салона" />
          <img src={photoSpeedo} width="128" height="80" alt="Фотография приборной панели" />
        </div>
        <button
          className={styles.button}
          type="button"
          aria-label="Пролистать слайд вправо"
          onClick={onRightButtonClick}
          disabled={activePhoto === MAX_PHOTO_INDEX}
        />
      </div>
    </div>
  );
}

export default Slider;
