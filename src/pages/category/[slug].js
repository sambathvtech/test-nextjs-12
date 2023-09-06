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

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let seo = null;
  let blogs = [];
  let categories = [];
  let catalogs = [];
  const getRoute = `/${decodeURI(decodeURI(slug))}`;

  if (getCMSDomain()) {
    seo = await fetch(
      fetchDataByGet('/categories', {
        '_where[_or][0][linkTo]': `/${slug}`,
        '_where[_or][1][linkTo]': getRoute,
      })
    )
      .then((res) => res.json())
      .then((data) => data[0]);

    blogs = await fetch(
      fetchDataByGet('/posts', {
        '_where[_or][0][categories.linkTo]': `/${slug}`,
        '_where[_or][1][categories.linkTo]': getRoute,
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

  seo = asSeo({
    ...seo,
    linkTo: `/category${getRoute}`,
  });

  return {
    props: {
      seo,
      blogs,
      categories,
      catalogs,
    },
  };
}
