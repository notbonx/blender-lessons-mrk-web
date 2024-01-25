// Импортируем React и другие библиотеки
import React, { createBrowserRouter } from 'react-router-dom';

// Подключение компонентов
import RootPage, { loader as rootLoader } from '../../pages/root/root';
import HomePage from '../../pages/home/home';
import ErrorPage from '../../pages/error/error';
import LessonPage, { loader as lessonLoader } from '../../pages/lesson/lesson';

// Создаем роутер
const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'lesson/:moduleId/:lessonId',
        loader: lessonLoader,
        element: <LessonPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export { router };
