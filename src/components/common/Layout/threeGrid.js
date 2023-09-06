import React from 'react';

export default function ThreeGrid({
  leftPanel,
  children,
  rightPanel,
  hideLeft = false,
  hideRight = false,
  gap,
}) {
  return (
    <section className='container-fluid'>
      <div className={`flex flex-col xl:flex-row ${gap}`}>
        <div className={`flex-none w-[292.5px] relative ${hideLeft ? 'hidden xl:block' : ''}`}>
          {leftPanel}
        </div>
        <div className={`w-full px-5 xl:px-0 `}>{children}</div>
        <div className={`flex-none w-[292.5px] ${hideRight ? 'hidden xl:block' : ''}  `}>
          {rightPanel}
        </div>
      </div>
    </section>
  );
}
