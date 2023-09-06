import { youtubeURLParser } from '@utilities';
import React from 'react';

export default function Video({ data }) {
  return (
    <div>
      <div className='py-5 clear-both'>
        <div className='w-full h-[150px] md:h-[320px] relative'>
          <iframe
            src={`${youtubeURLParser(data.videoURL)}?controls=0`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
            allowFullScreen={false}
            className='w-full h-full'
            width='1280'
            height='720'
          />
        </div>
      </div>
    </div>
  );
}
