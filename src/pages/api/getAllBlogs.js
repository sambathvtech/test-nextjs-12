import { fetchDataByGet } from '../../service/strapi';

function getItem(start) {
  return fetch(
    fetchDataByGet(`/posts`, {
      _limit: 100,
      _start: start,
    })
  ).then((res) => res.json());
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
  const count = await fetch(fetchDataByGet('/posts/count')).then((resData) => resData.json());

  const data = await getCountItem(count);

  return data;
}

export default async function handler(req, res) {
  try {
    const count = await fetch(fetchDataByGet('/posts/count')).then((resData) => resData.json());

    const data = await getCountItem(count);

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }

  return undefined;
}
