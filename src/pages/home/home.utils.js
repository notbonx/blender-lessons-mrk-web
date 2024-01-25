// Функция calculateProgress вычисляет прогресс пользователя в прохождении модулей курса
const calculateProgress = (allModules, userProgress) => {
  // Счетчик завершенных модулей
  const completedModules = allModules.reduce((progress, { id: moduleId, lessons }) => {
    // Проверяем наличие данных о прогрессе для модуля и наличие пройденных всех уроков
    if (userProgress[moduleId] && !lessons.some(({ id: lessonId }) => !userProgress[moduleId].includes(lessonId))) {
      return progress + 1; // Увеличиваем счетчик, если у модуля есть прогресс
    }
    return progress;
  }, 0);
  // Рассчитываем процент завершенности курса
  return Math.round((completedModules / allModules.length) * 100);
};

export { calculateProgress };
