import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottom-right', children } = props;
    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, [popupCls[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
