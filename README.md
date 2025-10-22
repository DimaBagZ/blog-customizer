# Blog Customizer

[![Live Demo](https://img.shields.io/badge/Live%20Demo-🌐%20Online-brightgreen)](https://dimabagz.github.io/blog-customizer/)
[![GitHub](https://img.shields.io/badge/GitHub-📁%20Repository-blue)](https://github.com/DimaBagZ/blog-customizer)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://dimabagz.github.io/blog-customizer/storybook/)

**Интерактивный редактор блога** с настройкой стилей в реальном времени. React приложение с TypeScript, Storybook и современной архитектурой компонентов.

**🌐 [Живая демо-версия](https://dimabagz.github.io/blog-customizer/)** - Настройте внешний вид статьи с помощью панели параметров.

## Запуск проекта

```bash
# Клонируем репозиторий
git clone https://github.com/DimaBagZ/blog-customizer.git
cd blog-customizer

# Устанавливаем зависимости
npm install

# Запускаем проект в режиме разработки
npm run start
```

**🌐 Откройте в браузере:** [http://localhost:3001](http://localhost:3001)

### Альтернативные команды

<details>
<summary><strong>📚 Storybook</strong></summary>

```bash
# Запуск Storybook для разработки компонентов
npm run storybook
```

**🌐 Storybook:** [http://localhost:6006](http://localhost:6006)

</details>

<details>
<summary><strong>🏗 Сборка проекта</strong></summary>

```bash
# Сборка для продакшена
npm run build
```

</details>

<details>
<summary><strong>🔍 Качество кода</strong></summary>

```bash
# Линтинг стилей
npm run stylelint

# Линтинг кода
npm run lint

# Форматирование кода
npm run format

# Все проверки сразу
npm run test
```

</details>

## 🛠 Технологии

| Категория        | Технологии                         |
| ---------------- | ---------------------------------- |
| **Frontend**     | React 18, TypeScript, SCSS Modules |
| **Сборка**       | Webpack 5, Babel, PostCSS          |
| **Архитектура**  | Компонентная система, Storybook    |
| **Стили**        | SCSS Modules, CSS Variables        |
| **Инструменты**  | ESLint, Prettier, Stylelint, Husky |
| **Документация** | Storybook для компонентов          |

## Реализованный функционал

### Система настройки стилей

**Интерактивная панель параметров**

- Реализована боковая панель с настройками стилей
- Добавлена система открытия/закрытия панели по клику на стрелку
- Создана возможность закрытия панели кликом вне области
- Настроена система применения стилей через CSS-переменные

**Управление состоянием**

- Реализовано раздельное хранение состояния формы и страницы
- Добавлена система предварительного просмотра изменений
- Создана возможность сброса настроек к начальным значениям
- Настроено применение стилей только после нажатия "Применить"

### Компонентная архитектура

**UI компоненты**

- Создана библиотека переиспользуемых компонентов
- Реализованы кастомные Select, RadioGroup, Button
- Добавлена система ArrowButton для навигации
- Настроена интеграция с Storybook для документации

**Форма параметров статьи**

- Реализована форма настройки параметров статьи
- Добавлена валидация и обработка пользовательского ввода
- Создана система передачи данных между компонентами
- Настроена интеграция с основным приложением

### Адаптивный дизайн

**Отзывчивая верстка**

- Реализована адаптивная панель настроек
- Добавлена поддержка различных размеров экрана
- Создана система плавных переходов и анимаций
- Настроена оптимизация для мобильных устройств

### Кастомные хуки

**useToggleState**

- Управление состоянием переключателя
- Открытие/закрытие панели настроек

**useOutsideClick**

- Обработка кликов вне элемента
- Автоматическое закрытие панели

## Доступные настройки

### Параметры текста

- **Шрифты:** Open Sans, Ubuntu, Cormorant Garamond, Days One, Merriweather
- **Размеры:** 18px, 25px, 38px
- **Цвета:** Черный, Белый, Серый, Розовый, Ярко-розовый, Жёлтый, Зелёный, Голубой, Фиолетовый

### Параметры оформления

- **Фон:** 9 цветовых вариантов
- **Ширина контента:** Широкий (1394px), Узкий (948px)

## Скриншоты

### Главная страница

<img width="1027" height="813" alt="image" src="https://github.com/user-attachments/assets/0cf47bf7-5662-451e-8168-74115819232c" />

_Интерфейс с настройками стилей статьи_

### Панель настроек

<img width="1028" height="815" alt="image" src="https://github.com/user-attachments/assets/20bb8bcc-3fd2-4e3e-9f94-c0a44f2aa542" />

_Боковая панель с параметрами настройки_

### Storybook

<img width="1918" height="922" alt="image" src="https://github.com/user-attachments/assets/d80b0d0a-38fe-4fb5-9f33-58f99dffd4f1" />

_Документация компонентов в Storybook_

## Особенности

- **Современный стек**: React 18, TypeScript, SCSS Modules
- **Компонентная архитектура** с переиспользуемыми элементами
- **Storybook интеграция** для разработки компонентов
- **CSS-переменные** для динамической настройки стилей
- **Адаптивный дизайн** для всех устройств
- **Качество кода** с ESLint, Prettier и Stylelint
- **Git hooks** с Husky для автоматических проверок
- **Кастомные хуки** для управления состоянием

## Ссылки

- **🌐 Live Demo**: [https://dimabagz.github.io/blog-customizer/](https://dimabagz.github.io/blog-customizer/)
- **📁 Repository**: [https://github.com/DimaBagZ/blog-customizer](https://github.com/DimaBagZ/blog-customizer)
- **📚 Storybook**: [https://dimabagz.github.io/blog-customizer/storybook/](https://dimabagz.github.io/blog-customizer/storybook/)
- **🎨 Figma макет**: [https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown](https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown)

---

<div align="center">

[⬆️ Наверх](#blog-customizer)

</div>
