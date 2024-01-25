// Импортируем React и другие библиотеки
import React from 'react';
import PropTypes from 'prop-types';

// Импортируем таблицу стилей
import styles from './block-link.module.scss';

// Компонент BlockLink принимает href (внешняя ссылка)
export default function BlockLink({ children, href }) {
  return (
    <a className={styles.link} target="_blank" href={href} rel="noreferrer">
      {children}
    </a>
  );
}

BlockLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
