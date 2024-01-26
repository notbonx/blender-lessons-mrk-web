import { UPDATE_PROGRESS, UPDATE_THEME } from '../types/user';

import UserProgressManager from '../../utils/UserProgressManager';
import ThemeManager from '../../utils/ThemeManager';

// Начальное состояние хранилища
const initialState = {
  progress: UserProgressManager.loadProgress(),
  theme: ThemeManager.initTheme(),
};

// Редуктор для управления состоянием хранилища
const userReducer = (state = initialState, { type, payload }) => {
  // Обработка различных действий
  switch (type) {
    case UPDATE_PROGRESS: {
      const { module, lesson } = payload;
      return {
        ...state,
        progress: { ...state.progress, [module]: [...(state.progress[module] || []), lesson] },
      };
    }
    case UPDATE_THEME: {
      return {
        ...state,
        theme: ThemeManager.getTheme(),
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};

export default userReducer;
