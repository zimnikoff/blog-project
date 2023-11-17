import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    isStroke?: boolean;
}
export const Icon = memo(({ className, Svg, isStroke }: IconProps) => {
    const mods: Mods = {
        [cls.isStroke]: isStroke,
    };

    return (
        <Svg className={classNames(cls.Icon, mods, [className])} />
    );
});
