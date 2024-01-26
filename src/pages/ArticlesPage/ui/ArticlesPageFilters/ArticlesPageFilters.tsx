import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input/Input';
import { Card } from '@/shared/ui/Card/Card';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleType,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from '@/entities/Article';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/artilclesPageSelectors';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    const onChangeType = useCallback((tab: ArticleType) => {
        dispatch(articlesPageActions.setType(tab));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder={t('Поиск')} />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
