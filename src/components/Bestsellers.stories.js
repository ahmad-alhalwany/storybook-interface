
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Bestsellers } from './Bestsellers';

export default {
  title: 'Component/Bestsellers',
  component: Bestsellers,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/40:2.png',
    },
  },

};

const Story = (args) => <Bestsellers {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  label: 'Bestsellers',
};
