import { UPDATE_MODULES } from '../types/modules';

// Создание действий (action creators)
// Действие для обновления модулей в хранилище
export const updateModules = (modules) => ({ type: UPDATE_MODULES, payload: modules });
