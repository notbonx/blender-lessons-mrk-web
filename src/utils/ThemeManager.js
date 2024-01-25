import LocalStorageManager from './LocalStorageManager';
import { THEMES, LOCAL_STORAGE, CLASS_DARK_THEME } from './constants';

class ThemeManager {
  constructor(
    localStorageManager = LocalStorageManager,
    themes = THEMES,
    storageKey = LOCAL_STORAGE.theme,
    darkThemeClass = CLASS_DARK_THEME,
  ) {
    // Используем переданные аргументы или значения по умолчанию
    this.localStorageManager = localStorageManager;
    this.themes = themes;
    this.storageKey = storageKey;
    this.darkThemeClass = darkThemeClass;
  }

  // Инициализация темы при загрузке страницы
  initTheme() {
    // Получаем сохраненную тему из локального хранилища
    const storedTheme = this.localStorageManager.getItem(this.storageKey);
    // Определяем начальную тему или используем светлую тему по умолчанию
    const initialTheme = this.themes[storedTheme] || this.themes.light;

    // Устанавливаем тему
    this.setTheme(initialTheme);

    // Возвращаем начальную тему
    return initialTheme;
  }

  // Переключение между светлой и темной темой
  toggleTheme() {
    // Определяем текущую тему
    const currentTheme = document.body.classList.contains(this.darkThemeClass) ? this.themes.dark : this.themes.light;
    // Определяем следующую тему для переключения
    const nextTheme = currentTheme === this.themes.light ? this.themes.dark : this.themes.light;

    // Устанавливаем класс темы для body
    document.body.className = nextTheme === this.themes.dark ? this.darkThemeClass : '';
    // Сохраняем тему в локальное хранилище
    this.localStorageManager.setItem(this.storageKey, nextTheme);

    // Возвращаем следующую тему
    return nextTheme;
  }

  // Установка конкретной темы
  setTheme(theme) {
    // Устанавливаем класс темы для body
    document.body.className = theme === this.themes.dark ? this.darkThemeClass : '';
    // Сохраняем тему в локальное хранилище
    this.localStorageManager.setItem(this.storageKey, theme);
  }

  // Получение текущей темы
  getTheme(defaultTheme = this.themes.light) {
    // Получаем сохраненную тему из локального хранилища или используем тему по умолчанию
    return this.localStorageManager.getItem(this.storageKey) || defaultTheme;
  }
}

// Экспортируем экземпляр класса ThemeManager
export default new ThemeManager();
