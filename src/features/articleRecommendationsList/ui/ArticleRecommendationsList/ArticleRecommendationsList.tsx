import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { useArticleRecommendationsList } from 'features/articleRecommendationsList/api/ArticleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
                className={cls.recommendations}
                virtualized
            />
        </VStack>
    );
});
