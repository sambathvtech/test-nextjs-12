import { navbarBtnsData } from '@constants';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Navbar() {
  const { asPath } = useRouter();

  const [showMenu, setShowMenu] = useState(null);

  return (
    <nav>
      <div className='container-full'>
        <div className='flex items-center justify-between py-2 md:py-0'>
          <div>
            <Link href='/'>
              <a>
                <div className='w-[50px] md:w-[100px]'>
                  <Image
                    src='/assets/main/logo.png'
                    alt='logo'
                    layout='responsive'
                    width={864}
                    height={864}
                  />
                </div>
              </a>
            </Link>
          </div>

          <div className='hidden md:block'>
            <ul className='flex gap-[20px]'>
              {navbarBtnsData?.map(
                (load) =>
                  load.show && (
                    <li
                      key={load.title}
                      className={`border-b-2 ${
                        load.linkTo === asPath ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <Link href={load.linkTo}>
                        <a className='text-white text-14px'>{load.title}</a>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>

          <div className='md:hidden'>
            <Hamburger
              toggled={showMenu}
              color='#fff'
              size={24}
              onToggle={() => setShowMenu(true)}
            />
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed z-50 top-0 w-full h-screen bg-black ${
          // eslint-disable-next-line no-nested-ternary
          showMenu !== null ? (showMenu ? 'menu-in' : 'menu-out') : 'hidden'
        }`}
      >
        <div className='text-white'>
          <div className='bg-primary py-2 flex justify-end px-[15px]'>
            <Hamburger toggled={showMenu} color='#fff' onToggle={() => setShowMenu(false)} />
          </div>
          <ul className='pt-[20px]'>
            {navbarBtnsData.map(
              (load) =>
                load.show && (
                  <li key={load.title} className='px-[20px]'>
                    <div className='px-[20px] py-[10px] border-b-[1px]'>
                      <Link href={load.linkTo}>
                        <a>
                          <button type='button' onClick={() => setShowMenu(false)}>
                            {load.title}
                          </button>
                        </a>
                      </Link>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
