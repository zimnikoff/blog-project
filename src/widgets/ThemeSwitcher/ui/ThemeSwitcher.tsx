import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import ThemeSwitcherIcon from '@/shared/assets/icons/theme-switcher.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import './ThemeSwitcher.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeSwitcherIcon className="theme-switcher-icon" />
        </Button>
    );
});
