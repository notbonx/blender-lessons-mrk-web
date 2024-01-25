// Импортируем React
import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useLocation, useNavigation } from 'react-router-dom';

// Импортируем Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateModules } from '../../services/actions/modules';

// Импортируем компоненты
import Loader from '../../components/loader/loader';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ThemeSwitcher from '../../components/theme-switcher/theme-switcher';

// Импортируем константы и функции из утилитарного файла
import { Api } from './root.utils';

// Импортируем таблицу стилей
import styles from './root.module.scss';

export async function loader() {
  try {
    const modules = await Api.getModules();
    return { modules };
  } catch (error) {
    throw new Response('', { status: error.status });
  }
}

export default function RootPage() {
  const dispatch = useDispatch();
  const { modules } = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();

  const allModules = useSelector((state) => state.modulesData.modules);

  // Обновление модулей в хранилище при монтировании компонента
  useEffect(() => {
    dispatch(updateModules(modules));
  }, [dispatch]);

  return (
    <div className={`${styles.container} ${location.pathname !== '/' && styles.container_lesson}`}>
      {/* Верхняя часть страницы: хедер */}
      <Header />
      {/* Основное содержимое страницы */}
      <main className={styles.content}>
        {/* Маршрутизация внутреннего контента через Outlet */}
        {(navigation.state === 'loading' || allModules.length === 0) && <Loader />}
        {navigation.state !== 'loading' && allModules.length > 0 && <Outlet />}
      </main>
      {/* Нижняя часть страницы: футер */}
      {location.pathname === '/' && <Footer />}
      <ThemeSwitcher />
    </div>
  );
}
