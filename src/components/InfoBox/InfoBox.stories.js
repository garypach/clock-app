import React from 'react';

import { InfoBox } from './InfoBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/InfoBox ',
  component: InfoBox ,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InfoBox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    timezone:'europe',
    daysofyear:'295',
    daysofweek:'5',
    weeknumber:'49'
};

