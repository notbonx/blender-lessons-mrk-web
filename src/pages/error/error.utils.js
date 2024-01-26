// Объект с сообщениями об ошибках, специфичными для определенных статусов
export const statusSpecificErrorMessages = {
  401: {
    title: 'Неавторизованный доступ',
    description:
      'У вас нет разрешения для доступа к этой странице. Пожалуйста, убедитесь, что вы авторизованы и имеете необходимые права доступа. Если проблема сохраняется, свяжитесь с администратором.',
  },
  403: {
    title: 'Доступ запрещён',
    description:
      'Кажется, у вас нет разрешения на просмотр этой страницы. Это может быть связано с вашим уровнем доступа или настройками безопасности. Если вы считаете, что это ошибка, свяжитесь с администратором или поддержкой для получения дополнительной помощи.',
  },
  404: {
    title: 'Страница не найдена',
    description:
      'Здесь могла быть ваша страница, но, кажется, мы не смогли её найти. Возможно, она переместилась, или вы допустили опечатку в адресе. Если вы уверены, что страница должна быть здесь, дайте нам знать.',
  },
  503: {
    title: 'Сервис временно недоступен',
    description:
      'Извините за неудобства, но на данный момент наш сервис временно недоступен. Мы работаем над устранением проблемы. Пожалуйста, попробуйте снова позже.',
  },
};

// Стандартные сообщения об ошибках для определенных статусов
export const defaultErrorStatusMessages = {
  400: {
    title: 'Некорректный запрос',
    description:
      'Возможно, ссылка устарела или в ней есть опечатка. Когда ошибка происходит на стороне вашего браузера, её код всегда начинается на 4.',
  },
  500: {
    title: 'Внутренняя ошибка сервера',
    description:
      'Упс! Что-то пошло не так на нашей стороне. Этот код ошибки начинается с 5 и означает, что что-то сломалось в работе сервера. Мы уже знаем об этом и работаем над исправлением. Вернитесь через некоторое время.',
  },
};
