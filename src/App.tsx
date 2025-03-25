import { useState, CSSProperties } from 'react';
import { Article } from './components/article';
import { ArticleParamsForm } from './components/article-params-form';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';
import styles from './styles/index.module.scss';

/**
 * Главный компонент приложения
 * Управляет состоянием стилей статьи и рендерит основные компоненты
 */
export const App = () => {
	// Состояние текущих настроек статьи
	const [currentSettings, setCurrentSettings] =
		useState<ArticleStateType>(defaultArticleState);

	// CSS переменные для применения стилей
	const styleVariables = {
		'--font-family': currentSettings.fontFamilyOption.value,
		'--font-size': currentSettings.fontSizeOption.value,
		'--font-color': currentSettings.fontColor.value,
		'--container-width': currentSettings.contentWidth.value,
		'--bg-color': currentSettings.backgroundColor.value,
	} as CSSProperties;

	return (
		<main className={styles.main} style={styleVariables}>
			{/* Форма настройки параметров статьи */}
			<ArticleParamsForm onSettingsChange={setCurrentSettings} />
			{/* Компонент статьи с контентом */}
			<Article />
		</main>
	);
};
