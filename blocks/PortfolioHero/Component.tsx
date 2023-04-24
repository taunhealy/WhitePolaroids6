import React from 'react';
import Media, { Type as MediaType } from '../../collections/Media';


export type Type = {
    blockType: 'portfoliohero'
    blockName?: string
    title: string
    location: string
    image: MediaType
  }
  
  export const Component: React.FC<Type> = (props) => {
    const { image, title, location } = props;

    return (
      <h1>{title}</h1>
      <h2>{location}</h2>
      <img src={image.url} alt={image.alt} />
    );
  };