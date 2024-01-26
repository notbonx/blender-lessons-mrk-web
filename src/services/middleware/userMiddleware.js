import { UPDATE_PROGRESS, UPDATE_THEME } from '../types/user';

import UserProgressManager from '../../utils/UserProgressManager';
import ThemeManager from '../../utils/ThemeManager';

// Middleware для управления состоянием пользователя
const userMiddleware = (store) => (next) => (action) => {
  // Передача действия следующему обработчику в цепочке middleware
  next(action);

  // Обработка действия обновления прогресса
  if (action.type === UPDATE_PROGRESS) {
    // Вызываем метод updateProgress из UserProgressManager с передачей данных о модуле и уроке
    UserProgressManager.updateProgress(action.payload.module, action.payload.lesson);
  }

  // Обработка действия обновления темы
  if (action.type === UPDATE_THEME) {
    // Вызываем метод toggleTheme из ThemeManager для переключения темы
    ThemeManager.toggleTheme();
  }
};

export default userMiddleware;
