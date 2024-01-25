// Импортируем React и другие библиотеки
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Импортируем компоненты
import Modal from '../modal/modal';

// Импортируем таблицу стилей
import styles from './block-image.module.scss';

// Компонент BlockImage принимает src (путь к изображению) и alt (альтернативный текст)
export default function BlockImage({ src, alt }) {
  // Состояние для открытия/закрытия модального окна
  const [openModal, setOpenModal] = useState(false);

  // Обработчик закрытия модального окна
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Обработчик открытия модального окна
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      {/* Контейнер для изображения с возможностью открытия модального окна по клику */}
      <div className={styles.container}>
        <img onClick={handleOpenModal} className={styles.content} src={src} alt={alt} />
      </div>

      {/* Модальное окно, отображающее увеличенное изображение при открытии */}
      {openModal && (
        <Modal onClose={handleCloseModal}>
          <img className={styles.modal} src={src} alt={alt} />
        </Modal>
      )}
    </>
  );
}

BlockImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
