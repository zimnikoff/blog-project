import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { DropDownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    className?: string;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

export function ListBox(props:ListBoxProps) {
    const {
        items, value, defaultValue, onChange, className, readonly, direction = 'bottom-right', label,
    } = props;

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(popupCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button as="div" className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, [popupCls[direction]])}>
                    {items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected, disabled }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                        [cls.disabled]: disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
