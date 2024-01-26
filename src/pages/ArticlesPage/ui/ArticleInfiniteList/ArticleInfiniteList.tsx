import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticles } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/artilclesPageSelectors';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '@/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleInfiniteList.module.scss';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text title={t('Произошла ошибка при загрузке статей')} />;
    }

    return (
        <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
            <ArticleList
                className={cls.list}
                view={view}
                isLoading={isLoading}
                articles={articles}
            />
        </div>
    );
});
