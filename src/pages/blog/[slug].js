import { Detail } from '@components/pages';
import { fetchDataByGet, fetcher } from '@service/strapi';
import { getCMSDomain } from '@utilities/dev';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function Index({ post, categories }) {
  const { data } = useSWR(fetchDataByGet(`/posts`), fetcher);

  const [moreBlogs, setMoreBlogs] = useState([]);
  const [prev, setPrev] = useState(undefined);
  const [next, setNext] = useState(undefined);

  useEffect(() => {
    if (data) {
      const index = data?.findIndex((ele) => ele.id === post.id);
      if (index !== -1 || index > 1) {
        setPrev(data[index - 1]);
      }
      if (index !== -1 || index < data.length - 2) {
        setNext(data[index + 1]);
      }
      const newArr = data?.filter((ele) => ele.id !== post.id);

      setMoreBlogs(newArr);
    }
  }, [data, post]);

  return (
    <Detail post={post} categories={categories} next={next} prev={prev} moreBlogs={moreBlogs} />
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let seo = null;
  let post = null;
  let categories = [];

  if (getCMSDomain()) {
    post = await fetch(
      fetchDataByGet('/posts', {
        '_where[_or][0][linkTo]': `/${slug}`,
        '_where[_or][1][linkTo]': `/${decodeURI(decodeURI(slug))}`,
      })
    )
      .then((res) => res.json())
      .then((data) => data[0]);

    categories = await fetch(fetchDataByGet('/categories')).then((resData) => resData.json());
  }

  if (!post || post === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  seo = {
    linkTo: `/blog/${slug}`,
    seo: {
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      images: post.images,
      faq: post.faq,
    },
  };

  return {
    props: {
      seo,
      post,
      categories,
    },
  };
}
