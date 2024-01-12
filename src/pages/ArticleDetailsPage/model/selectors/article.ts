import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => (!article || !user ? false : article.user.id === user.id),
);
