<p>RickAndMorty-project</p>

<h2 tabindex="-1" class="heading-element" dir="auto">Технологии</h2>
<ul dir="auto">
<li><strong>React</strong> — библиотека для создания пользовательских интерфейсов.</li>
<li><strong>Typescript</strong> — язык программирования, расширяющий возможности JavaScript.</li>
<li><strong>React Router</strong> — библиотека для управления маршрутизацией приложения.</li>
<li><strong>TailwindCss</strong> — CSS-фреймворк, позволяющий вносить изменения в оформление сайтов и приложений, не покидая HTML-разметку..</li>
</ul>

<h2 tabindex="-1" class="heading-element" dir="auto">Структура проекта</h2>
📦 ram-project/
├── 📂 src/
│   ├── 📂 app/                   
│   │   ├── 📂 providers/    <- Провайдеры
│   │   │   └── 📜 CharacterFilterProvider.tsx  // Провайдер фильтров
│   │   ├── 📂 styles/       <- Стили
│   │   ├── 📂 providers/    <- Типы
│   │   │   └── 📜 CharacterFilterProvider.tsx  // Провайдер фильтров
│   │   │   └── 📜 CharacterFilterProvider.tsx  // Провайдер фильтров
│   │   └── 📜 App.tsx       // Главный компонент приложения

│   ├── 📂 features/ 
│   │   └── 📂 filterPanel/  <- Фильтрация персонажей
│   │       ├── 📂 ui/
│   │       │   └── 📜 CharacterFilterPanel.tsx  // Панель с фильтрами
│   │       ├── 📂 model/
│   │       │   └── 📜 dataSelect.ts             // Данные для селектов
│   │   └── 📂 character/    <- Персонаж
│   │       ├── 📂 ui/
│   │       │   └── 📜 Character.tsx             // Компонент персонажа
│   │       ├── 📂 model/
│   │           ├── 📂 hooks/ 
│   │               └── 📜 useCharacter.tsx      // Хук для получения ланных о персонаже


│   ├── 📂 widgets/ 
│   │   └── 📂 character-list/    <- Список персонажей
│   │       ├── 📂 ui/
│   │       │   └── 📜 CharacterList.tsx    // Компонент списка персонажей
│   │       ├── 📂 model/
│   │       │   └── 📜 useCharactersList.ts // Хук для получения данных о персонажах
│   │   └── 📂 Header/            <- Хедер
│   │       ├── 📂 ui/
│   │       │   └── 📜 Header.tsx           // Компонент хедер

│   ├── 📂 pages/    
│   │       ├── 📂 ui/
│   │       │   └── 📜 MainPage.tsx           // Главная страница со списком персонажей
│   │       ├── 📂 ui/
│   │       │   └── 📜 CharacterPage.tsx      // Страница информации о персонаже

│   ├── 📂 shared/          
│   │   ├── 📂 assets/              <- Файлы проекта
│   │       ├── 📂 icons/               <- Иконки
│   │       ├── 📂 images/              <- Изображения
│   │   ├── 📂 ui/                  <- UI компоненты
│   │   │   ├── 📜 Input.tsx            // Компонент инпут
│   │   │   ├── 📜 Select.tsx           // Компонент селект
│   │   │   ├── 📜 Loader.tsx           // Компонент загрузки
│   │   │   ├── 📜 Pagination.tsx       // Компонент пагинации
│   │   │   └── 📜 AppLink.tsx          // Компонент ссылок
│   │   │   └── 📜 Button.tsx           // Компонент кнопок
│   │   │   └── 📜 Icon.tsx             // Компонент иконок
│   └── 📜 main.tsx                  // Точка входа в приложение

├── 📜 vite.config.ts            // Конфигурация Vite
├── 📜 tsconfig.json             // Конфигурация TypeScript
├── 📜 package.json              // Файл зависимостей и скриптов
├── 📜 README.md                 // Описание проекта
└── 📜 .gitignore                // Список игнорируемых файлов

<h2 tabindex="-1" class="heading-element" dir="auto">Запуск проекта</h2>
<ol dir="auto">
<li>1.Склонируйте проект: git clone https://github.com/alina-np/rm-project.git </li>
<li>2.Перейдите в папку: cd <имя_папки_проекта> </li>
<li>3.Запустите сервер разработки: npm run dev </li>

</ol>
