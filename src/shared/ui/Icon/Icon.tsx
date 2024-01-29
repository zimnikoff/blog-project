import React, { memo, SVGProps } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    isStroke?: boolean;
    inverted?: boolean;
}
export const Icon = memo(({ className, Svg, isStroke, inverted, ...otherProps }: IconProps) => {
    const mods: Mods = {
        [cls.isStroke]: isStroke,
        [cls.Inverted]: inverted,
    };

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, mods, [className])}
            {...otherProps}
        />
    );
});
