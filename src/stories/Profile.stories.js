import React from 'react';
import { createClient } from 'contentful';
//     CONTENTFUL_SPACE_ID=7whwniqrt63z
// CONTENTFUL_ACCESS_TOKEN=tXtsPS_wEpVo15jzVpDBbzhDd4tBzZuk-4P9b3driQk

import Profile from './Profile';

export default {
  component: Profile,
  title: 'Profile',
};

const Template = args => <Profile {...args} />;
export const Default = Template.bind({});   

// name, role, company,  imageUrl
Default.args = {
    name: 'Profile name',
    role: 'Profile role',
    company: 'Company name',
    imageUrl: 'https://via.placeholder.com/200',
  };

export const Contentful = (args, { loaded }) => <Profile {...args} {...loaded} />;
Contentful.loaders = [
  async () => {
    const client = await createClient({
      space: '7whwniqrt63z',
      accessToken: 'tXtsPS_wEpVo15jzVpDBbzhDd4tBzZuk-4P9b3driQk',
    });
  
    const response = await client.getEntries({
      content_type: 'contentfulToStorybookProfile',
    });
    console.log('response ---->', response.items[0].fields);
    const {
      name,
      role,
      company,
      profileImage
    } = response.items[0].fields;
    return {
      name,
      role,
      company,
      imageUrl: profileImage.fields.file.url,
    }
  },
];