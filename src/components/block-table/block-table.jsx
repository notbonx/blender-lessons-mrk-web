// Импортируем React и другие библиотеки
import React from 'react';
import PropTypes from 'prop-types';

// Импортируем таблицу стилей
import styles from './block-table.module.scss';

// Компонент BlockTable
export default function BlockTable({ children }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>{children}</table>
    </div>
  );
}

BlockTable.propTypes = {
  children: PropTypes.node.isRequired,
};
