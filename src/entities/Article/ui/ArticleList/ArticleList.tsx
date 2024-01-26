import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { PAGE_ID } from '@/widgets/Page/Page';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

function getSkeletons(view: ArticleView) {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(null)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        virtualized = true,
    } = props;

    const { t } = useTranslation('article');

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    align={TextAlign.CENTER}
                    title={t('Статьи не найдены')}
                />
            </div>
        );
    }

    return (
        // @ts-ignore
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                            // @ts-ignore
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRenderer}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map((item) => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    target={target}
                                    key={item.id}
                                    className={cls.card}
                                />
                            ))
                        )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
