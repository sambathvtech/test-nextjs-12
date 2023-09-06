import moment from 'moment';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';
import { FaFacebookF } from 'react-icons/fa';
import { Display } from '@components/common';

export default function Social({ data, url, direction }) {
  const [openShare, setOpenShare] = useState(false);

  return (
    <div className='pt-2 relative'>
      <div className='flex gap-1 items-center'>
        <div className='flex items-center gap-1'>
          <Display.Icon name='calendar' width={16} height={16} color='#ffffff' />
          <p className='text-12px'>{moment(data?.publish_at).format('MM月 DD, YYYY')}</p>
        </div>
        <div>
          <p className='text-[10px] md:text-12px'>|</p>
        </div>
        <div className='relative group'>
          <button
            type='button'
            className='flex items-center gap-2'
            onClick={() => setOpenShare((el) => !el)}
          >
            <Display.Icon name='share' width={12} height={12} />
          </button>

          {openShare && (
            <div
              className={`absolute z-40 top-[10px] md:top-[20px] min-w-full ${
                direction === 'right' ? 'right-0' : '-left-[20px]'
              }`}
            >
              <div className='relative pt-2'>
                <div
                  className={`w-[20px] h-[20px] bg-white rotate-45 absolute top-0 ${
                    direction === 'right'
                      ? 'right-[3.1px]'
                      : 'md:right-auto md:left-4 left-auto right-4'
                  }`}
                />
                <ul className='bg-white p-2 flex gap-2 relative'>
                  <li>
                    <TwitterShareButton url={url}>
                      <div className='flex items-center text-gray-400 gap-2'>
                        <BsTwitter className='text-gray-400 flex-none text-[10px] md:text-base' />
                        {/* <p className='whitespace-nowrap text-[10px] md:text-base'>
                          Share to Twitter
                        </p> */}
                      </div>
                    </TwitterShareButton>
                  </li>
                  <li>
                    <FacebookShareButton url={url}>
                      <div className='flex items-center text-gray-400 gap-2'>
                        <FaFacebookF className='text-gray-400 flex-none text-[10px] md:text-base' />
                        {/* <p className='whitespace-nowrap text-[10px] md:text-base'>
                          Share to Facebook
                        </p> */}
                      </div>
                    </FacebookShareButton>
                  </li>
                  <li>
                    <EmailShareButton url={url}>
                      <div className='flex items-center text-gray-400 gap-2'>
                        <AiOutlineMail className='text-gray-400 flex-none text-[10px] md:text-base' />
                        {/* <p className='whitespace-nowrap text-[10px] md:text-base'>Share to Email</p> */}
                      </div>
                    </EmailShareButton>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
