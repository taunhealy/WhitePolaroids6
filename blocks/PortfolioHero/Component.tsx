import React from 'react';

export type Type = {
    blockType: 'portfoliohero'
    blockName?: string
    title: string
    location: string
    image: MediaType
  }
  
  export const Component: React.FC<Type> = (props) => {
    const { image } = props;