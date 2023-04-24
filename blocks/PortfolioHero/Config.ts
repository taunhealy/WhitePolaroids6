import { Block } from 'payload/types';
import { Type as PortfolioType } from '../../collections/Portfolio';

export type Type = {

    portfolio: PortfolioType[]
    blockType: 'portfoliohero'
  }

export const PortfolioHero: Block = {
  slug: 'portfoliohero',
  labels: {
    singular: 'portfoliohero',
    plural: 'portfolioheroes',
  },
  fields: [
    {
        name: 'portfolioitems',
        type: 'relationship',
        relationTo: 'portfolio',
        hasMany: true,
        required: true,
      },
    ],
};

export default PortfolioHero