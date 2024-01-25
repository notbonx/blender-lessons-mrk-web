// Импортируем React и другие библиотеки
import React, { useState, useMemo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

// Импортируем Redux
import { useSelector } from 'react-redux';

// Импортируем компоненты
import Modal from '../modal/modal';
import InfoModule from '../module-info/module-info';
import SvgHome from '../svg-home/svg-home';
import SvgModules from '../svg-modules/svg-modules';

// Импортируем константы и функции из утилитарного файла
import { logoIcon } from './header.utils';

// Импортируем таблицу стилей
import styles from './header.module.scss';

// Компонент Header
export default function Header() {
  // Получаем текущий URL
  const location = useLocation();
  // Получаем идентификатор модуля из параметров URL
  const { moduleId } = useParams();

  // Состояние для открытия/закрытия модального окна
  const [openModal, setOpenModal] = useState(false);

  // Получаем данные модулей из Redux state
  const modulesData = useSelector((state) => state.modulesData.modules);

  // Мемоизированные данные модуля для улучшения производительности
  const moduleData = useMemo(() => modulesData.find(({ id }) => id === moduleId), [modulesData, moduleId]);

  // Закрытие модального окна
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Открытие модального окна
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      {/* Верхний блок страницы - шапка */}
      <header className={styles.container}>
        <div className={styles.content}>
          {/* Ссылка на главную страницу */}
          <Link className={styles.content__link} to="/">
            <img className={styles.content__icon} src={logoIcon} alt="Логотип" />
          </Link>
          {/* Блок кнопок, отображаемый только на страницах, отличных от главной */}
          {location.pathname !== '/' && (
            <div className={styles.content__buttons}>
              {/* Ссылка на главную страницу */}
              <Link className={`${styles.buttons__item} ${styles.buttons__item_link}`} to="/">
                <SvgHome extraClass={styles.buttons__icon} />
              </Link>
              {/* Кнопка открытия модального окна */}
              <button className={`${styles.buttons__item} ${styles.buttons__item_button}`} onClick={handleOpenModal}>
                <SvgModules extraClass={styles.buttons__icon} />
              </button>
            </div>
          )}
        </div>
      </header>
      {/* Модальное окно с информацией о модуле */}
      {openModal && (
        <Modal onClose={handleCloseModal}>
          <InfoModule data={moduleData} handleClick={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}
