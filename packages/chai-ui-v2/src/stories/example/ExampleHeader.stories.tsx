import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExampleHeader } from './ExampleHeader';

export default {
  title: 'Example/Header',
  component: ExampleHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ExampleHeader>;

const Template: ComponentStory<typeof ExampleHeader> = (args) => <ExampleHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
