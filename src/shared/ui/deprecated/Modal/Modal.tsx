import React, { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/deprecated/Portal/Portal';
import { Overlay } from '@/shared/ui/deprecated/Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();

    const { close, isClosing, isMounted } = useModal({
        animationDelay: 200,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, ['app-modal', className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
