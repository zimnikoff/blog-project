import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        /**
         * Содержимое кнопки
         */
        children,
        /**
         * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
         */
        theme = ButtonTheme.OUTLINE,
        /**
         * Флаг, делающий кнопку квадратной
         */
        square,
        /**
         * Флаг, отвечающий за работу кнопки
         */
        disabled,
        /**
         * Флаг, отвечающий за работу кнопки
         */
        size = ButtonSize.M,
        /**
         * Увеличивает кнопку на всю свободную ширину
         */
        fullWidth = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
