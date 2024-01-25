// Класс для работы с API
class ApiService {
  constructor(url) {
    this._baseUrl = url;
  }

  // Обработка ответа от сервера
  _checkResponseStatus(response) {
    if (!response.ok) {
      throw new Response('', { status: response.status });
    }
  }

  // Получение данных по модулям
  async getModules() {
    try {
      const response = await fetch(`${this._baseUrl}/index.json`);
      this._checkResponseStatus(response);
      const modulesData = await response.json();
      return modulesData;
    } catch (error) {
      // Обработка ошибки при получении данных по модулям
      throw new Response('', { status: error.status });
    }
  }

  // Получение данных по уроку в рамках модуля
  async getLesson(module, lesson) {
    try {
      const response = await fetch(`${this._baseUrl}/${module}/${lesson}`);
      this._checkResponseStatus(response);
      const lessonData = await response.text();
      return lessonData;
    } catch (error) {
      // Обработка ошибки при получении данных по уроку
      throw new Response('', { status: error.status });
    }
  }
}

// Создание экземпляра ApiService с базовым URL
export default new ApiService('https://raw.githubusercontent.com/NotACat1/COMPASS-3D-courses/gh-pages');
