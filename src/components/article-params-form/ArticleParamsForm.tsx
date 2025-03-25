import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useToggleState } from 'src/hooks/useToggleState';
import { Select } from 'src/ui/select/Select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { FormEvent, useRef, useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { useOutsideClick } from 'src/hooks/useOutsideClick';

type ArticleParamsFormProps = {
	onSettingsChange: (settings: ArticleStateType) => void; // Колбэк для изменения настроек
};

/**
 * Компонент формы настройки параметров статьи
 * @param {ArticleParamsFormProps} props - Пропсы компонента
 */
export const ArticleParamsForm = ({
	onSettingsChange,
}: ArticleParamsFormProps) => {
	// Состояние открытия/закрытия формы
	const { isActive, toggle } = useToggleState({ initialValue: false });
	// Локальное состояние настроек перед применением
	const [currentOptions, setCurrentOptions] =
		useState<ArticleStateType>(defaultArticleState);
	const formRef = useRef<HTMLDivElement>(null);

	// Обработчик кликов вне формы
	useOutsideClick({
		isActive,
		onClose: toggle,
		containerRef: formRef,
	});

	/**
	 * Фабрика функций для обновления конкретной настройки
	 * @param {keyof ArticleStateType} key - Ключ настройки
	 * @returns Функция обработчик изменения
	 */
	const updateOption =
		(key: keyof ArticleStateType) => (selected: OptionType) => {
			setCurrentOptions((prev) => ({ ...prev, [key]: selected }));
		};

	// Обработчик отправки формы
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSettingsChange(currentOptions); // Применяем настройки
		toggle(); // Закрываем форму
	};

	// Сброс настроек к значениям по умолчанию
	const resetSettings = () => {
		setCurrentOptions(defaultArticleState);
		onSettingsChange(defaultArticleState);
		toggle();
	};

	return (
		<div ref={formRef}>
			{/* Кнопка открытия/закрытия формы */}
			<ArrowButton isOpen={isActive} onClick={toggle} />

			{/* Сайдбар с формой */}
			<aside
				className={clsx(styles.container, isActive && styles.container_open)}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Настройки статьи
					</Text>

					{/* Поле выбора шрифта */}
					<Select
						options={fontFamilyOptions}
						selected={currentOptions.fontFamilyOption}
						onChange={updateOption('fontFamilyOption')}
						title='Шрифт'
					/>

					{/* Группа выбора размера шрифта */}
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={currentOptions.fontSizeOption}
						title='Размер шрифта'
						onChange={updateOption('fontSizeOption')}
					/>

					{/* Поле выбора цвета текста */}
					<Select
						options={fontColors}
						selected={currentOptions.fontColor}
						onChange={updateOption('fontColor')}
						title='Цвет текста'
					/>

					<Separator />

					{/* Поле выбора фона */}
					<Select
						options={backgroundColors}
						selected={currentOptions.backgroundColor}
						onChange={updateOption('backgroundColor')}
						title='Фон'
					/>

					{/* Поле выбора ширины контента */}
					<Select
						options={contentWidthArr}
						selected={currentOptions.contentWidth}
						onChange={updateOption('contentWidth')}
						title='Ширина'
					/>

					{/* Кнопки управления */}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='clear' onClick={resetSettings} />
						<Button title='Применить' type='apply' htmlType='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
