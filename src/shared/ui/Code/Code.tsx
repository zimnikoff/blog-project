import { memo, useCallback } from 'react';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import CopyIcon from '../../assets/icons/copy-20-20.svg';

interface CodeProps {
    className?: string;
    code: string;
}

export const Code = memo(({ className, code }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <pre className={classNames(cls.container, {}, [className])}>
            <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
                <Icon Svg={CopyIcon} isStroke />
            </Button>
            <code className={cls.code}>
                {code}
            </code>
        </pre>
    );
});
