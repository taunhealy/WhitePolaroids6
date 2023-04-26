import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import { Type as MediaType } from './Media';

export type Type = {
  title: string
  featuredMedia: MediaType
  previewMedia: {
    media: MediaType
  }[]
  location?: string
  slug: string
}
const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    slug,
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredMedia',
      label: 'Featured Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'previewMedia',
      label: 'Preview Media',
      type: 'group',
      fields: [
        {
          name: 'media',
          label: 'Media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default Portfolio;
