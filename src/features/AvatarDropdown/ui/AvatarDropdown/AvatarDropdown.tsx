import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            items={[
                {
                    content: t('Профиль'),
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    href: getRouteProfile(authData.id),
                },
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: getRouteAdminPanel(),
                }] : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar fallbackInverted size={40} src={authData?.avatar} />}
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom-left"
        />
    );
});