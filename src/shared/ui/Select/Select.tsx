import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
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

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => onChange?.(e.target.value);

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
});
