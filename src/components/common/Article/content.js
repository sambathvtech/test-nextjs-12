import { RichTextMarkdown } from '@service/format';
import React from 'react';

export default function Content({ data }) {
  return (
    <div className='py-5 md:px-10 clear-both'>
      {data?.title && (
        <div className='border-2 border-primary rounded-md text-white text-center p-1 px-4 mb-4'>
          <h2>{data?.title}</h2>
        </div>
      )}

      <div className='strapi-content text-white font-light'>
        <RichTextMarkdown content={data?.content} />
      </div>
    </div>
  );
}
