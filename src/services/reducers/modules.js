// Импорт констант для действий с бургером
import { UPDATE_MODULES } from '../types/modules';

// Начальное состояние хранилища
const initialState = {
  modules: [],
};

// Редуктор для управления состоянием хранилища
const modulesReducer = (state = initialState, { type, payload }) => {
  // Обработка различных действий
  switch (type) {
    case UPDATE_MODULES: {
      return {
        ...state,
        modules: [...payload],
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};

export default modulesReducer;
