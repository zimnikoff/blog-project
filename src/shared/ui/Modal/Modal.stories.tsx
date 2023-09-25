import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: '',
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam commodi distinctio eaque, esse facere itaque laboriosam odio omnis pariatur placeat qui quos, rerum similique sint vitae voluptatem. Dolores, repudiandae!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam commodi distinctio eaque, esse facere itaque laboriosam odio omnis pariatur placeat qui quos, rerum similique sint vitae voluptatem. Dolores, repudiandae!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];