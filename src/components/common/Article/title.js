import React from 'react';

export const LayoutTitle = ({ dataSource, children }) => {
  return (
    <div className='clear-both bg-third p-[2px]'>
      <div
        className='py-[6px] px-[10px] text-center bg-blogTitle'
        style={{ backgroundColor: dataSource?.bgColor ? dataSource?.bgColor : 'transparent' }}
      >
        {children}
      </div>
    </div>
  );
};

export default function Title({ data }) {
  switch (data.type) {
    case 'H1':
      return (
        <LayoutTitle dataSource={data}>
          <h1 style={{ color: data.textColor ? data.textColor : 'black' }}>{data.title}</h1>
        </LayoutTitle>
      );
    case 'H2':
      return (
        <LayoutTitle dataSource={data}>
          <h2 style={{ color: data.textColor ? data.textColor : 'black' }}>{data.title}</h2>
        </LayoutTitle>
      );
    case 'H3':
      return (
        <LayoutTitle dataSource={data}>
          <h3 style={{ color: data.textColor ? data.textColor : 'black' }}>{data.title}</h3>
        </LayoutTitle>
      );
    case 'H4':
      return (
        <LayoutTitle dataSource={data}>
          <h4 style={{ color: data.textColor ? data.textColor : 'black' }}>{data.title}</h4>
        </LayoutTitle>
      );
    case 'H5':
      return (
        <LayoutTitle dataSource={data}>
          <h5 style={{ color: data.textColor ? data.textColor : 'black' }}>{data.title}</h5>
        </LayoutTitle>
      );
    case 'H6':
      return (
        <LayoutTitle dataSource={data}>
          <h6 style={{ color: data.textColor ? data.textColor : 'black' }}>{data.title}</h6>
        </LayoutTitle>
      );
    default:
      return null;
  }
}
