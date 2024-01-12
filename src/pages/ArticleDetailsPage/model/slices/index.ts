import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
