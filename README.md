<p>RickAndMorty-project</p>

<h2 tabindex="-1" class="heading-element" dir="auto">Технологии</h2>
<ul dir="auto">
<li><strong>React</strong> — библиотека для создания пользовательских интерфейсов.</li>
<li><strong>Typescript</strong> — язык программирования, расширяющий возможности JavaScript.</li>
<li><strong>React Router</strong> — библиотека для управления маршрутизацией приложения.</li>
<li><strong>TailwindCss</strong> — CSS-фреймворк, позволяющий вносить изменения в оформление сайтов и приложений, не покидая HTML-разметку..</li>
</ul>

<h2 tabindex="-1" class="heading-element" dir="auto">Структура проекта</h2>
<br>📦 ram-project/
<br>├── 📂 src/
<br>│   ├── 📂 app/                   
<br>│   │   ├── 📂 providers/    <- Провайдеры
<br>│   │   │   └── 📜 CharacterFilterProvider.tsx  // Провайдер фильтров
<br>│   │   ├── 📂 styles/       <- Стили
<br>│   │   ├── 📂 providers/    <- Типы
<br>│   │   │   └── 📜 CharacterFilterProvider.tsx  // Провайдер фильтров
<br>│   │   │   └── 📜 CharacterFilterProvider.tsx  // Провайдер фильтров
<br>│   │   └── 📜 App.tsx       // Главный компонент приложения
<br>│   ├── 📂 features/ 
<br>│   │   └── 📂 filterPanel/  <- Фильтрация персонажей
<br>│   │       ├── 📂 ui/
<br>│   │       │   └── 📜 CharacterFilterPanel.tsx  // Панель с фильтрами
<br>│   │       ├── 📂 model/
<br>│   │       │   └── 📜 dataSelect.ts             // Данные для селектов
<br>│   │   └── 📂 character/    <- Персонаж
<br>│   │       ├── 📂 ui/
<br>│   │       │   └── 📜 Character.tsx             // Компонент персонажа
<br>│   │       ├── 📂 model/
<br>│   │           ├── 📂 hooks/ 
<br>│   │               └── 📜 useCharacter.tsx      // Хук для получения ланных о персонаже
<br>│   ├── 📂 widgets/ 
<br>│   │   └── 📂 character-list/    <- Список персонажей
<br>│   │       ├── 📂 ui/
<br>│   │       │   └── 📜 CharacterList.tsx    // Компонент списка персонажей
<br>│   │       ├── 📂 model/
<br>│   │       │   └── 📜 useCharactersList.ts // Хук для получения данных о персонажах
<br>│   │   └── 📂 Header/            <- Хедер
<br>│   │       ├── 📂 ui/
<br>│   │       │   └── 📜 Header.tsx           // Компонент хедер
<br>│   ├── 📂 pages/    
<br>│   │       ├── 📂 ui/
<br>│   │       │   └── 📜 MainPage.tsx           // Главная страница со списком персонажей
<br>│   │       ├── 📂 ui/
<br>│   │       │   └── 📜 CharacterPage.tsx      // Страница информации о персонаже
<br>│   ├── 📂 shared/          
<br>│   │   ├── 📂 assets/              <- Файлы проекта
<br>│   │       ├── 📂 icons/               <- Иконки
<br>│   │       ├── 📂 images/              <- Изображения
<br>│   │   ├── 📂 ui/                  <- UI компоненты
<br>│   │   │   ├── 📜 Input.tsx            // Компонент инпут
<br>│   │   │   ├── 📜 Select.tsx           // Компонент селект
<br>│   │   │   ├── 📜 Loader.tsx           // Компонент загрузки
<br>│   │   │   ├── 📜 Pagination.tsx       // Компонент пагинации
<br>│   │   │   └── 📜 AppLink.tsx          // Компонент ссылок
<br>│   │   │   └── 📜 Button.tsx           // Компонент кнопок
<br>│   │   │   └── 📜 Icon.tsx             // Компонент иконок
<br>│   └── 📜 main.tsx                  // Точка входа в приложение
<br>├── 📜 vite.config.ts            // Конфигурация Vite
<br>├── 📜 tsconfig.json             // Конфигурация TypeScript
<br>├── 📜 package.json              // Файл зависимостей и скриптов
<br>├── 📜 README.md                 // Описание проекта
<br>└── 📜 .gitignore                // Список игнорируемых файлов

<h2 tabindex="-1" class="heading-element" dir="auto">Запуск проекта</h2>
<ol dir="auto">
<li>Склонируйте проект: git clone https://github.com/alina-np/rm-project.git </li>
<li>Перейдите в папку: cd <имя_папки_проекта> </li>
<li>Запустите сервер разработки: npm run dev </li>

</ol>
