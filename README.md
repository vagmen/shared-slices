# @urman/shared-slices

React компонентная библиотека, построенная с использованием TypeScript и Vite.

## Установка

```bash
npm install @urman/shared-slices
```

## Разработка

1. Клонируйте репозиторий
2. Установите зависимости:

```bash
npm install
cd example
npm install
```

3. Запустите режим разработки:

```bash
npm run dev
```

Это запустит пример приложения на http://localhost:3000, где вы можете тестировать компоненты.

## Структура проекта

/example # Демо-приложение для тестирования компонентов
index.html
index.tsx
package.json
tsconfig.json
/src # Исходный код библиотеки
index.tsx # Точка входа
/test # Тесты
.test.tsx

## Скрипты

- `npm run build` - сборка библиотеки
- `npm run test` - запуск тестов
- `npm run lint` - проверка кода линтером
- `npm run dev` - запуск демо-приложения

## Выпуск новой версии

1. Обновите версию в package.json:

```bash
npm version major|minor|patch
```

2. Создайте и отправьте git tag:

```bash
git add .
git commit -m "Release version x.x.x"
git tag -a vx.x.x -m "Version x.x.x"
git push origin main
git push origin vx.x.x
```

3. Создайте релиз на GitHub:

- Перейдите в раздел "Releases"
- Нажмите "Create a new release"
- Выберите созданный тег
- Опишите изменения в релизе
- Опубликуйте релиз

4. Опубликуйте в npm:

```bash
npm publish
```

## CI/CD

Проект использует GitHub Actions для:

- Проверки сборки, линтинга и тестов при каждом push
- Анализа размера бандла при создании PR

## Технологии

- TypeScript для типизации
- Vite для сборки
- Vitest для тестирования
- ESLint для линтинга
- React ≥16 как peer dependency

## Лицензия

MIT
