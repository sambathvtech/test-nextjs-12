import { Blogs } from '@components/pages';
import { fetchDataByGet } from '@service/strapi';
import { asSeo } from '@utilities';
import { getCMSDomain } from '@utilities/dev';
import React from 'react';

export default function Index({ seo, blogs, limit, categories, catalogs }) {
  return (
    <Blogs seo={seo} dataSource={blogs} limit={limit} categories={categories} catalogs={catalogs} />
  );
}

export async function getStaticProps() {
  let seo = null;
  let blogs = [];
  const limit = 12;
  let categories = [];
  let catalogs = [];

  if (getCMSDomain()) {
    seo = await fetch(
      fetchDataByGet('/routes', {
        linkTo: '/blogs',
      })
    )
      .then((res) => res.json())
      .then((data) => data[0]);

    blogs = await fetch(
      fetchDataByGet('/posts', {
        _limit: limit,
        _sort: 'publish_at:DESC',
      })
    ).then((resData) => resData.json());

    await fetch(fetchDataByGet('/paths'))
      .then((res) => res.json())
      .then((data) => data[0])
      .then((newData) => {
        if (newData) {
          categories = newData?.categories;
          catalogs = newData?.catalogs;
        }
      });
  }

  seo = asSeo(seo);

  return {
    props: {
      seo,
      blogs,
      limit,
      categories,
      catalogs,
    },
    revalidate: 10,
  };
}
