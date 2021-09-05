import React from 'react';
import { createClient } from 'contentful';

import Hero from './Hero';

export default {
  component: Hero,
  title: 'Hero',
};

const Template = args => <Hero {...args} />;
export const Default = Template.bind({});   

Default.args = {
    name: 'Default header',
    description: 'Default hero description',
    ctaText: 'Click me',
    imageUrl: 'https://via.placeholder.com/300'
  };

export const Contentful = (args, { loaded }) => <Hero {...args} {...loaded} />;
Contentful.loaders = [
  async () => {
    const client = await createClient({
      space: '7whwniqrt63z',
      accessToken: 'tXtsPS_wEpVo15jzVpDBbzhDd4tBzZuk-4P9b3driQk',
    });
  
    const response = await client.getEntries({
      content_type: 'contentfulToStorybookHero',
    });
    console.log('response ---->', response.items[0].fields);
    const {
      name,
      description,
      ctaText,
      heroImage
    } = response.items[0].fields;
    return {
      name,
      ctaText,
      description,
      imageUrl: heroImage.fields.file.url,
    }
  },
];