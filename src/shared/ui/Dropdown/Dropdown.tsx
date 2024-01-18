import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropDownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Dropdown.module.scss';

export interface DropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom-right' } = props;
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [className, cls[direction]])}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <Button
                            className={classNames(cls.item, { [cls.active]: active })}
                            onClick={item.onClick}
                            disabled={item.disabled}
                            theme={ButtonTheme.CLEAR}
                        >
                            {item.content}
                        </Button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
