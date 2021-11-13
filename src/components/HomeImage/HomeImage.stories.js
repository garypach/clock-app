import React from 'react';

import { HomeImage } from './HomeImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/HomeImage',
  component: HomeImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HomeImage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    image: "https://c32-cdn.guidingtech.com/media/assets/_800x418_crop_center-center_82_none/Best-Nature-Wallpapers-in-4K-and-Full-HD-for-Desktop-and-Mobile-8.jpg?mtime=1549009677",
};

