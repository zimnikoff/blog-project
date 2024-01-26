import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    code: 'import React from \'react\';\n'
        + 'import { ComponentStory, ComponentMeta } from \'@storybook/react\';\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;',
};
Normal.decorators = [];

export const Dark = Template.bind({});
Dark.args = {
    code: 'import React from \'react\';\n'
        + 'import { ComponentStory, ComponentMeta } from \'@storybook/react\';\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Afternoon = Template.bind({});
Afternoon.args = {
    code: 'import React from \'react\';\n'
        + 'import { ComponentStory, ComponentMeta } from \'@storybook/react\';\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;',
};
Afternoon.decorators = [ThemeDecorator(Theme.AFTERNOON)];
