import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import { VStack } from '@/shared/ui/deprecated/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <VStack
                max
                gap="16"
                className={classNames(cls.CommentCard, {}, [className])}
                data-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} isRound />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {!!comment?.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
