<div align="center"><h1>ScheduleManager (frontend)</h1></div>
<h3 align="center">Лучшее средство управления расписанием</h3>
  
  <p align="center">
    <a href="https://gitlab.com/Trokne/schedule-manager-backend">Backend</a> |
    <a href="https://vk.com/trokne">VK</a> |
    <a href="https://t.me/trokne">Telegram</a> |
    <br/><br/>

ScheduleManager является менеджером расписаний и потенциально позволяет создавать собственные группы, управлять расписанием, добавлять домашние задания и отслеживать контрольные работы.

## Как запустить

### Соберите и запустите backend часть приложения

Репозиторий: https://gitlab.com/Trokne/schedule-manager-backend

### Убедитесь, что у Вас установлена последняя стабильная версия Node.JS (> 10)

``` node -v ```

В случае ошибки выполнения команды: https://nodejs.org/en/download/


### Скачайте node модули

С помощью npm:

```npm install```

Или yarn (при наличии):

```yarn```

### Выполните скрипт start

С помощью npm:

```npm run start```

Или yarn (при наличии):

```yarn start```

## Что есть?

### Авторизация и аутентификация

Готовая авторизация и аутентификация пользователей, права доступа. Всё это работает, но на данный момент бэкенд не требует токена для совершения операций для удобства разработки.

### Группы

Список групп (учебных) - можно добавлять, удалять и редактировать их. А ещё в БД бэкенда был кропотливо загружен список учебных заведений - составлять его пришлось руками, т.к. в открытом доступе он нигде не имеется.

### Eslint и prettier

Настроены и используются ```eslint``` и ```prettier```. Соблюдается стиль кода ```airbnb```.

Для запуска проверки кода из корневой папки проекта необходимо запустить (для npm):

```npm run lint```

Для запуска проверки и попытки автоматического исправления:

```npm run lint:write```

Для удобства проверка линтером помещена в скрипт ```npm run start```.

### Husky и Lint-Staged

Для того, чтобы в ```master``` не попал плохой код, настроены гит-хуки.
Перед командами ```git push``` или ```git rebase``` запускается ```linst-staged```, который проверяет staged файлы перед отправкой и не позволяет влить изменения, если в файлах присутствует хотя бы одна ошибка.

### Webpack и друзья

Приложение содержит настроенный webpack, а также следующие плагины:
* PostCSS, autoprefixer, precss, postcss-preset-env  - расширения CSS
* HtmlWebpackPlugin

Для hot-loading вместо стандартных средства webpack'a используется модуль [react-hot-loader](https://github.com/gaearon/react-hot-loader).

### Роутинг

Для расширения возможностей роутинга используется [connected-react-router](https://github.com/supasate/connected-react-router). Позволяет использовать такие методы, как

```push(URL)```

Чтобы перейти по заданному URL в методе.

## Почему так мало?

К сожалению, не хватило времени :( Были неверно оценены возможности и зачем-то стал писаться параллельно полноценный бэкенд с авторизацией и прочим-прочим. В итоге на это ушло много времени, началась учёба, продолжилась работа и... вот так вот.