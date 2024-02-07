import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';

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

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom-right' } = props;
    return (
        <Menu as="div" className={classNames('', {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [className, popupCls[direction]])}>
                {items.map((item, index) => {
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
                            <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
