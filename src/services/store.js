// Redux - библиотека для управления состоянием приложения
import { compose, createStore, applyMiddleware } from 'redux';

// rootReducer - корневой редюсер, объединяющий все редюсеры в приложении
import { rootReducer } from './reducers';

// Redux Thunk - middleware для обработки асинхронных действий в Redux
import { thunk } from 'redux-thunk';

import userMiddleware from './middleware/userMiddleware';

// Настройка Redux DevTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// Создание хранилища Redux с применением middleware
const enhancer = composeEnhancers(applyMiddleware(thunk, userMiddleware));

// Экспорт созданного хранилища Redux
export const store = createStore(rootReducer, enhancer);
