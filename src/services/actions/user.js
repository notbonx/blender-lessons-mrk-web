import { UPDATE_PROGRESS, UPDATE_THEME } from '../types/user';

// Создание действий (action creators)
// Действие для обновления прогресса в модулях
export const updateModules = (module, lesson) => ({ type: UPDATE_PROGRESS, payload: { module, lesson } });

// Действие для обновления темы (например, светлой/темной)
export const updateTheme = () => ({ type: UPDATE_THEME });
