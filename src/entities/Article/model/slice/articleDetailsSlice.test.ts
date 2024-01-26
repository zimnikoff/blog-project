import { Article, ArticleDetailsSchema, ArticleType } from '@/entities/Article';

import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
    id: '1',
    title: 'title',
};

const article: Article = {
    id: '1',
    img: 'img',
    views: 123,
    createdAt: '',
    subtitle: '123',
    title: '234',
    type: [ArticleType.IT],
    blocks: [],
    user: {
        id: '1',
        username: 'Jorik',
    },
};

describe('profileSlice.test', () => {
    test('test pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: 'error',
            isLoading: false,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({ error: undefined, isLoading: true });
    });

    test('test fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: 'error',
            data: undefined,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(article, '', ''),
        )).toEqual({
            error: undefined,
            isLoading: false,
            data: article,
        });
    });

    test('test error', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected(new Error('message'), 'requestId', 'arg', 'payload', ['meta']),
        )).toEqual({
            error: 'payload',
            isLoading: false,
        });
    });
});
