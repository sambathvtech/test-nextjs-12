/* eslint-disable no-console */
import React, { useState } from 'react';

export default function Home() {
  const [startFrom, setStartFrom] = useState(0);
  const [limit, setLimit] = useState(100);
  const [total, setTotal] = useState(0);

  const [progressValue, setProgressValue] = useState(0);

  const testFn = async () => {
    setProgressValue(0);

    let countUp = 0;

    const loopStart = setInterval(async () => {
      await fetch(
        `/api/download-image?start=${
          countUp * 10 + parseInt(limit, 10) * parseInt(startFrom, 10)
        }&limit=10&folder=${startFrom}`
      ).then((res) => res.json());

      console.log(countUp * 10);
      countUp += 1;

      setProgressValue(countUp);

      if (countUp >= 10) {
        clearInterval(loopStart);
        setTotal(countUp * 10 + parseInt(limit, 10) * parseInt(startFrom, 10));
        setStartFrom((el) => parseInt(el, 10) + 1);
      }
    }, 3000);
  };

  return (
    <div className='container-full py-[50px]'>
      <div className='flex flex-col gap-[10px]'>
        <input
          type='number'
          value={startFrom}
          placeholder='Start From'
          className='border-2 border-black p-2 rounded-md'
          onChange={(e) => setStartFrom(e.target.value)}
        />
        <input
          type='number'
          value={limit}
          placeholder='limit'
          className='border-2 border-black p-2 rounded-md'
          onChange={(e) => setLimit(e.target.value)}
        />
        <button type='button' onClick={() => testFn()} className='bg-black text-white p-2'>
          Test
        </button>

        <div className='flex items-center gap-[10px]'>
          <div>
            <progress value={progressValue} max={10} />
          </div>
          <div>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
