import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    round?: boolean;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        round,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: round ? '50%' : undefined,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        >

        </div>
    );
});
