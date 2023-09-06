import React, { useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import cx from 'classnames';

export default function Faq({ dataSource }) {
  const [faqIndex, setFaqIndex] = useState('');

  const openFaq = (idx) => {
    if (idx === faqIndex) {
      setFaqIndex('');
    } else {
      setFaqIndex(idx);
    }
  };
  return (
    <div className='mt-10 clear-both text-black'>
      <h2 className='text-24px font-bolded text-center'>Q&A</h2>
      <ul className='mt-5'>
        {dataSource?.map((load, idx) => (
          <li
            key={load.id}
            className={cx(
              'py-2',
              dataSource?.length === idx + 1 ? '' : 'border-black border-b-[1px]'
            )}
          >
            <button
              type='button'
              onClick={() => openFaq(idx)}
              className='flex justify-between w-full items-center'
            >
              <h3 className='text-left text-14px font-light text-black'>{load.questionName}</h3>
              <div className='flex-none'>
                <BsArrowUp
                  className={`text-14px duration-300 ${faqIndex !== idx && 'rotate-180'}`}
                />
              </div>
            </button>
            {faqIndex === idx && (
              <p className='opacity-60 mt-2 text-14px font-light text-black'>
                {load.acceptedAnswerText}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
