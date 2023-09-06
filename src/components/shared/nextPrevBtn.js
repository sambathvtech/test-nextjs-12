import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function NextPrevBtn({ prev, next }) {
  return (
    <div className='grid grid-cols-2 gap-10 pb-10 pt-3'>
      <div className='flex justify-end '>
        <div className={cx('flex justify-start')}>
          {prev && (
            <Link href={`/blog${prev?.linkTo}`}>
              <a>
                <div className='relative flex items-center justify-between w-[100px] h-[29px] px-2 bg-gradient-to-t from-third via-fourth to-primary rounded-full'>
                  <FaArrowLeft color='#ffffff' size={16} />
                  <div className='text-[12px] font-bold text-center text-white uppercase'>
                    Previous
                  </div>
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className='flex justify-start'>
        <div className={cx('flex justify-end')}>
          {next && (
            <Link href={`/blog${next?.linkTo}`}>
              <a>
                <div className='relative flex justify-end items-center w-[100px] h-[29px] px-2 bg-gradient-to-t from-third via-fourth to-primary rounded-full'>
                  <div className='text-[12px] font-bold text-center text-white uppercase mr-3'>
                    Next
                  </div>
                  <FaArrowRight color='#ffffff' size={16} />
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
