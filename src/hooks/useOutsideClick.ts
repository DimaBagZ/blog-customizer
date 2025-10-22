import { useEffect } from 'react';

type UseOutsideClickProps = {
	isActive: boolean; // Флаг активности (открыто ли меню/модальное окно)
	onClose: () => void; // Колбэк для закрытия
	containerRef: React.RefObject<HTMLElement>; // Реф на элемент, клики вне которого нужно отслеживать
};

/**
 * Хук для обработки кликов вне элемента и нажатия Escape
 * @param {UseOutsideClickProps} params - Параметры хука
 */
export function useOutsideClick({
	isActive,
	onClose,
	containerRef,
}: UseOutsideClickProps) {
	useEffect(() => {
		if (!isActive) return; // Не добавляем обработчики если элемент неактивен

		// Обработчик клика по документу
		const handleDocumentClick = (event: MouseEvent) => {
			const clickedElement = event.target as Node;
			// Проверяем, что клик был вне целевого элемента
			const isClickOutside =
				containerRef.current && !containerRef.current.contains(clickedElement);

			if (isClickOutside) {
				onClose(); // Закрываем элемент если клик был снаружи
			}
		};

		// Обработчик нажатия клавиши Escape
		const handleEscapePress = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose(); // Закрываем элемент при нажатии Escape
			}
		};

		// Добавляем обработчики событий
		document.addEventListener('mousedown', handleDocumentClick);
		document.addEventListener('keydown', handleEscapePress);

		// Удаляем обработчики при размонтировании
		return () => {
			document.removeEventListener('mousedown', handleDocumentClick);
			document.removeEventListener('keydown', handleEscapePress);
		};
	}, [isActive, onClose, containerRef]); // Зависимости эффекта
}
