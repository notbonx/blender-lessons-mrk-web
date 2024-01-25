// Импортируем React и другие библиотеки
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Подключение компонентов
import ModalOverlay from '../modal-overlay/modal-overlay';
import SvgClose from '../svg-close/svg-close';

// Импортируем константы и функции из утилитарного файла
import { closeIcon, modalRoot } from './modal.utils';

// Подключение стилей и данных
import styles from './modal.module.scss';

// Компонент модального окна
export default function Modal({ children, onClose }) {
  // Обработка события нажатия на клавишу "Escape" для закрытия модального окна
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Добавление слушателя события "keydown" при монтировании компонента
    document.addEventListener('keydown', handleEsc);

    // Удаление слушателя события "keydown" при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Используем createPortal для отображения модального окна вне обычного порядка вложенности
  return ReactDOM.createPortal(
    <>
      <div className={styles.container}>
        {/* Кнопка для закрытия модального окна */}
        <button className={styles.container__button} onClick={onClose}>
          <SvgClose extraClass={styles.container__image} />
        </button>
        {/* Внутреннее содержимое модального окна */}
        {children}
      </div>
      {/* Затемненный фон вокруг модального окна */}
      <ModalOverlay onClose={onClose} />
    </>,
    // DOM-контейнер, в который будет вставлен портал
    modalRoot,
  );
}

// Определение PropTypes для компонента
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
