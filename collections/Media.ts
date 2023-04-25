import { CollectionConfig } from 'payload/types';

export type SizeDetails = {
  filename: string
  width: number
  height: number
}

export type Size = 'card' | 'square' | 'portrait' | 'feature';

export type Filename = string & {
  __filenameBrand: 'filename'
};

const isFilename = (value: unknown): value is Filename => {
  if (typeof value !== 'string') {
    return false;
  }
  return /^[a-zA-Z0-9-]*$/.test(value);
};

export type Type = {
  filename: Filename,
  alt: string,
  mimeType: string,
  sizes: {
    card?: SizeDetails,
    square?: SizeDetails,
    portrait?: SizeDetails,
    feature?: SizeDetails,
  },
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  admin: {
    useAsTitle: 'filename',
  },
  upload: {
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
      },
      {
        name: 'portrait',
        width: 768,
        height: 1024,
      },
      {
        name: 'square',
        width: 1200,
        height: 1200,
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
      },
    ],
  },
  fields: [
    {
      name: 'filename',
      label: 'Filename',
      type: 'text',
      required: true,
      validate: (value: unknown) => {
        if (!isFilename(value)) {
          return 'Filename must only contain alphanumeric characters and hyphens';
        }
      },
    },
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};

export default Media;
yar