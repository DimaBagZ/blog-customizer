import { useState, useEffect } from 'react';

type UseToggleStateProps = {
	initialValue: boolean; // Начальное состояние переключателя
};

/**
 * Хук для управления булевым состоянием (toggle)
 * @param {UseToggleStateProps} params - Параметры хука
 * @returns {Object} Объект с состоянием и функцией переключения
 */
export const useToggleState = ({ initialValue }: UseToggleStateProps) => {
	const [isToggled, setToggle] = useState<boolean>(initialValue);

	// Синхронизация состояния при изменении initialValue
	useEffect(() => {
		setToggle(initialValue);
	}, [initialValue]);

	// Функция переключения состояния
	const toggle = () => setToggle((prev) => !prev);

	return {
		isActive: isToggled, // Текущее состояние
		toggle, // Функция переключения
	};
};
