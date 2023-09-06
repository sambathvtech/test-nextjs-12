import { fetchImage } from '@service/strapi';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

export default function Banner({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    data?.images?.length > 0 && (
      <div className='py-5 clear-both'>
        <Slider {...settings}>
          {data?.images?.map((load) => (
            <div key={load.id}>
              <Image
                src={fetchImage(load.url)}
                alt={load.name}
                layout='responsive'
                width={load.width}
                height={load.height}
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  );
}
