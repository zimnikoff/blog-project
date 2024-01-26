import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { t } = useTranslation();
    const { isLoading, data } = useGetNotifications(null, {
        pollingInterval: 1000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" height={71} borderRadius={15} />
                <Skeleton width="100%" height={71} borderRadius={15} />
                <Skeleton width="100%" height={71} borderRadius={15} />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
        </VStack>
    );
});
