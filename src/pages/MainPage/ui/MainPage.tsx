import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            <BugButton />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
