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
  meta: MetaType
}
const Portfolio: CollectionConfig = {
slug: 'portfolio',
admin: {
    useAsTitle: 'title',
},

fields: [
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
        }
    },
    {
    name: 'images',
    type: 'upload',
    relationTo: 'media',
    filterOptions: {
        mimeType: { contains: 'image' },
    hasMany: true,
    required: true,
  },
},
],
};

export default Portfolio;
