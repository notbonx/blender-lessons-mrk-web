// Импортируем React и другие библиотеки
import React from 'react';
import { RouterProvider } from 'react-router-dom';

// Импортируем константы и функции из утилитарного файла
import { router } from './app.utils';

// Компонент App
export default function App() {
  // Возвращаем компонент с провайдером маршрутизатора
  return <RouterProvider router={router} />;
}
