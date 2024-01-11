import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly = false,
    } = props;

    const optionsList = useMemo(() => (
        options?.map((option) => (
            <option
                key={option.value}
                value={option.value}
            >
                {option.content}
            </option>
        ))
    ), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => (
        onChange?.(e.target.value as T)
    );

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select value={value} disabled={readonly} onChange={onChangeHandler} className={cls.select}>
                {optionsList}
            </select>
        </div>
    );
};
