import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    isStroke?: boolean;
    inverted?: boolean;
}
export const Icon = memo(({ className, Svg, isStroke, inverted }: IconProps) => {
    const mods: Mods = {
        [cls.isStroke]: isStroke,
        [cls.Inverted]: inverted,
    };

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, mods, [className])} />
    );
});
