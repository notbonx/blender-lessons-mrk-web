// Импортируем React
import React from 'react';

// Импортируем Redux
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../services/actions/user';

// Подключение компонентов
import SvgTheme from '../svg-theme/svg-theme';

// Подключение стилей и данных
import styles from './theme-switcher.module.scss';

// Компонент переключения темы
export default function ThemeSwitcher() {
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(updateTheme());
  };

  // Возвращаем кнопку с иконкой для переключения темы
  return (
    <button className={styles.button} onClick={changeTheme}>
      <SvgTheme extraClass={styles.button__image} />
    </button>
  );
}
