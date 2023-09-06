import { RichTextMarkdown } from '@service/format';
import { fetchImage } from '@service/strapi';
import React from 'react';

export default function Align({ data }) {
  return (
    <div className='py-2 clear-both text-white '>
      {data?.image && (
        <img
          src={fetchImage(data?.image?.url)}
          alt={data.image.name}
          width={data.image.width}
          height={data.image.height}
          className={`${!data.align_left ? 'float-right' : 'float-left'} m-3`}
        />
      )}

      {data?.title && <h2 className='mb-4'>{data?.title}</h2>}

      {data?.description && (
        <div className='strapi-content text-white font-light'>
          <RichTextMarkdown content={data?.description} />
        </div>
      )}
    </div>
  );
}
