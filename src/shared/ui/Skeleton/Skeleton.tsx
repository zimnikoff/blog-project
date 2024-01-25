import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    isRound?: boolean;
    borderRadius?: number;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        isRound,
        borderRadius = 0,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: (borderRadius > 0 ? `${borderRadius}px` : undefined) || (isRound ? '50%' : undefined),
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        >

        </div>
    );
});
