import { CalendarIcon, ShareIcon, TitleIcon } from '@components/assets/main';
import Image from 'next/image';
import React from 'react';

const ImageIcon = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} layout='responsive' width={width} height={height} />;
};

export default function Icon({ name, width, height, className, color, bgColor }) {
  const props = {
    width,
    height,
    className,
    color,
    bgColor,
  };

  switch (name) {
    case 'calendar':
      return <CalendarIcon {...props} />;
    case 'share':
      return <ShareIcon {...props} />;
    case 'title':
      return <TitleIcon {...props} />;
    case 'facebook':
      return (
        <ImageIcon src='/assets/main/svg/facebook.svg' alt='facebook' width={30} height={30} />
      );
    case 'instagram':
      return (
        <ImageIcon src='/assets/main/svg/instagram.svg' alt='instagram' width={30} height={30} />
      );
    case 'line':
      return <ImageIcon src='/assets/main/svg/line.svg' alt='line' width={30} height={30} />;
    case 'youtube':
      return <ImageIcon src='/assets/main/svg/youtube.svg' alt='youtube' width={30} height={30} />;
    default:
      return null;
  }
}
