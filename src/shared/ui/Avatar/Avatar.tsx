import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt, fallbackInverted = false } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton isRound width={size} height={size} />;
    const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} />;

    return (
        <AppImage
            src={src}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
            width={size}
            height={size}
        />
    );
};
