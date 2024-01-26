import LocalStorageManager from './LocalStorageManager';
import { LOCAL_STORAGE } from './constants';

// Класс для управления прогрессом пользователя
class UserProgressManager {
  // Конструктор класса
  constructor(localStorageManager = LocalStorageManager, storageKey = LOCAL_STORAGE.userProgress) {
    // Используем переданные аргументы или значения по умолчанию
    this.localStorageManager = localStorageManager; // Менеджер локального хранилища
    this.storageKey = storageKey; // Ключ хранения данных прогресса пользователя
    this.userProgress = this.loadProgress(); // Загружаем прогресс пользователя из локального хранилища
  }

  // Метод для загрузки прогресса пользователя из локального хранилища
  loadProgress() {
    const progressData = localStorage.getItem(this.storageKey);
    return progressData ? JSON.parse(progressData) : {}; // Возвращаем объект прогресса или пустой объект
  }

  // Метод для сохранения прогресса пользователя в локальное хранилище
  saveProgress() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.userProgress));
  }

  // Метод для обновления прогресса пользователя при прохождении урока
  updateProgress(moduleId, lessonId) {
    // Если нет записи для модуля, создаем массив
    if (!this.userProgress[moduleId]) {
      this.userProgress[moduleId] = [];
    }

    // Если урок еще не отмечен как пройденный, добавляем его и сохраняем прогресс
    if (!this.userProgress[moduleId].includes(lessonId)) {
      this.userProgress[moduleId].push(lessonId);
      this.saveProgress();
    }
  }

  // Метод для получения прогресса пользователя по конкретному модулю
  getProgressForModule(moduleId) {
    return this.userProgress[moduleId] || []; // Возвращаем массив пройденных уроков для модуля
  }
}

// Экспортируем экземпляр класса UserProgressManager
export default new UserProgressManager();
