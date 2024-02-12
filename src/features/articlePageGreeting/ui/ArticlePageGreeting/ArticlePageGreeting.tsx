import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal/Modal';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('article');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlePageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const onClose = useCallback(() => setIsOpen(false), []);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t('Здесь вы можете искать и читать статьи на различные темы')}
        />
    );

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose} lazy>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            {text}
        </Modal>
    );
});
