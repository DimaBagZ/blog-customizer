import './styles/index.scss'; // Глобальные стили
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';

// Получаем корневой DOM-элемент
const rootElement = document.getElementById('root') as HTMLDivElement;
// Создаем корень React приложения
const appRoot = createRoot(rootElement);

// Рендерим приложение в StrictMode для дополнительных проверок
appRoot.render(
	<StrictMode>
		<App />
	</StrictMode>
);
