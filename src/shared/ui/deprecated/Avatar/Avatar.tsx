import { CSSProperties, useMemo } from 'react';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage/AppImage';
import { Icon } from '@/shared/ui/deprecated/Icon/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
