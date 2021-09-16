import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './modal.module.scss';

function Modal({isModalActive, setIsModalActive}) {
  return (
    <ReactModal
      className={styles.modal}
      isOpen={isModalActive}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => setIsModalActive(false)}
    >
      <h2>
        Оставить отзыв
      </h2>
      <form>
        <div>
          <label>
            <input type="text" placeholder="Имя"/>
          </label>
        </div>
      </form>
    </ReactModal>
  );
}

Modal.propTypes = {
  isModalActive: PropTypes.bool.isRequired,
  setIsModalActive: PropTypes.func.isRequired,
};

export default Modal;
