// Импортируем React и другие библиотеки
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// Импортируем Redux
import { useSelector } from 'react-redux';

// Подключение компонентов
import Modal from '../modal/modal';
import ModulInfo from '../module-info/module-info';

// Импортируем константы и функции из утилитарного файла
import { getLessonWord } from './module.utils';

// Импортируем таблицу стилей
import styles from './module.module.scss';

// Компонент, представляющий модуль
export default function Module({ data }) {
  const userProgress = useSelector((state) => state.userData.progress);

  // Деструктуризация свойств объекта data
  const { icon, title, lessons, duration = '???', id: moduleId } = data;
  // Состояние для открытия/закрытия модального окна
  const [openModal, setOpenModal] = useState(false);

  // Вычисление прогресса с использованием useMemo
  const memoizedProgress = useMemo(() => {
    const completedLessons = lessons.reduce(
      (progress, { id: lessonId }) => (userProgress[moduleId]?.includes(lessonId) ? progress + 1 : progress),
      0,
    );
    return Math.round((completedLessons / lessons.length) * 100);
  }, [userProgress, moduleId, lessons]);

  // Закрытие модального окна
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Открытие модального окна
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Возвращаемый JSX
  return (
    <>
      {/* Элемент списка, обрабатывающий клик для открытия модального окна */}
      <li className={styles.container} onClick={handleOpenModal}>
        {/* Иконка модуля */}
        <img className={styles.container__icon} src={icon.path} alt={icon.caption} />
        {/* Контент модуля */}
        <div className={styles.container__content}>
          {/* Заголовок модуля */}
          <h3 className={styles.container__title}>{title}</h3>
          {/* Информация о количестве уроков и продолжительности */}
          <p className={styles.container__progress}>
            {/* Отображение количества уроков и соответствующего слова для уроков */}
            {lessons.length} {getLessonWord(lessons.length)} &asymp; {duration} мин.
          </p>
          {memoizedProgress > 0 && (
            <div className={styles.line}>
              <div className={styles.line__progress} style={{ width: `${memoizedProgress}%` }}></div>
            </div>
          )}
        </div>
      </li>
      {/* Условный рендеринг модального окна */}
      {openModal && (
        <Modal onClose={handleCloseModal}>
          {/* Передача данных компоненту ModulInfo через props */}
          <ModulInfo data={data} />
        </Modal>
      )}
    </>
  );
}

Module.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.shape({
      path: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    duration: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
