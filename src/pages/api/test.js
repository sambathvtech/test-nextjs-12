// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchDataByGet, fetchImage } from '@service/strapi';

function getItem(start) {
  return fetch(
    fetchDataByGet(`/upload/files`, {
      _limit: 100,
      _start: start,
    })
  )
    .then((res) => res.json())
    .then((data) => {
      return data.map((load) => fetchImage(load.url));
      // return data;
    });
}

async function getCountItem(newData) {
  const itemReq = await [...Array(Math.ceil(newData / 100))].map(async (_, idx) => {
    return getItem(idx * 100);
  });
  return Promise.all(itemReq).then((result) => {
    const newArr = [];
    result.map((load) => {
      return load.map((load1) => newArr.push(load1));
    });

    return newArr;
  });
}

export async function getAllBlogs() {
  const count = await fetch(fetchDataByGet('/upload/files/count')).then((resData) =>
    resData.json()
  );

  const data = await getCountItem(count);

  return data;
}

export default async (req, res) => {
  const data = await getAllBlogs();

  res.statusCode = 200;
  res.json({ data });
};
