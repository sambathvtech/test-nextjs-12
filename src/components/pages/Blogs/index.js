import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { fetchDataByGet } from '@service/strapi';

const fetchData = async (e) => {
  const data = fetch(
    fetchDataByGet('/posts', {
      ...e,
      _sort: 'publish_at:DESC',
    })
  ).then((res) => res.json());

  return data;
};

const Test = () => {
  return null;
};

export default function Blogs({ dataSource, limit, categories, catalogs }) {
  const [data, setData] = useState(dataSource);
  const [moreBtn, setMoreBtn] = useState(true);

  const { run } = useRequest(fetchData, {
    manual: true,
    onSuccess: (result) => {
      if (result) {
        setData((el) => el.concat(result));
        if (result.length <= 0) {
          setMoreBtn(false);
        }
      }
    },
  });

  useEffect(() => {
    if (dataSource.length < limit) {
      setMoreBtn(false);
    }

    setData(dataSource);
  }, [dataSource]);

  const getMoreFn = () => {
    run({
      _start: data.length,
      _limit: limit,
    });
  };

  return (
    <main>
      <Test categories={categories} catalogs={catalogs} getMoreFn={getMoreFn} moreBtn={moreBtn} />
    </main>
  );
}
