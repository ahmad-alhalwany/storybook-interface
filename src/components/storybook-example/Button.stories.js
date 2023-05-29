import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Story = (args) => <Button {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/a7Dlr5SxcDXaqrLUUCTlsH/SaaS-CRM-UI-Kit---FrontWork?node-id=1152%3A27',
    },
  },
};

export const Secondary = Story.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Story.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Story.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
