import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import {
    ArticleDetailsPageHeader,
} from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '@/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlag } from '@/shared/lib/features';
import { Counter } from '@/entities/Counter';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag(('isArticleRatingEnabled'));
    const isCounterEnabled = getFeatureFlag(('isCounterEnabled'));

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isCounterEnabled && <Counter />}
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
