import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import img from 'shared/assets/tests/js-logo.png';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

const article = {
    id: '1',
    title: 'Javascript news asfasjf asfjkask f',
    subtitle: 'Что нового в JS за 2022 год?',
    img,
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Ulbi tv',
        avatar,
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [],
} as Article;

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article,
};
