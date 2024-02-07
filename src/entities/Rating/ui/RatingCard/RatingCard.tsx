import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card/Card';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating/StarRating';
import { Modal } from '@/shared/ui/deprecated/Modal/Modal';
import { Input } from '@/shared/ui/deprecated/Input/Input';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModelOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModelOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModelOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModelOpen(false);
    }, []);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
                title={feedbackTitle}
            />
        </>
    );

    return (
        <Card max className={classNames('', {}, [className])} data-testid="RatingCard">
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="8" justify="between">
                            <Button
                                onClick={cancelHandle}
                                theme={ButtonTheme.OUTLINE_RED}
                                data-testid="RatingCard.Close"
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandle} data-testid="RatingCard.Send">
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            onClick={acceptHandle}
                            theme={ButtonTheme.OUTLINE_RED}
                            size={ButtonSize.L}
                            fullWidth
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
