import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/deprecated/Card/Card';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
    const content = (
        <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return <AppLink className={cls.link} to={item.href}>{content}</AppLink>;
    }

    return content;
});
