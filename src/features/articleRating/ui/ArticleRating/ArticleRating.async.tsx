import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';

const ArticleRatingLazy = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleRating')), 300);
}));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
