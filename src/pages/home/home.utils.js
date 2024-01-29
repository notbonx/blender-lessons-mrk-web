// Функция calculateProgress вычисляет прогресс пользователя в прохождении модулей курса
const calculateProgress = (allModules, userProgress) => {
  // Счетчик пройденных уроков
  let completedLessons = 0;

  // Общее количество уроков
  let totalLessons = 0;

  allModules.forEach(({ id: moduleId, lessons }) => {
    // Увеличиваем общее количество уроков
    totalLessons += lessons.length;

    // Проверяем наличие данных о прогрессе для модуля
    if (userProgress[moduleId]) {
      // Проверяем, сколько уроков в данном модуле пройдено
      completedLessons += userProgress[moduleId].filter((lessonId) =>
        lessons.some((lesson) => lesson.id === lessonId),
      ).length;
    }
  });
  // Рассчитываем процент завершенности курса
  return totalLessons !== 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
};

export { calculateProgress };
