import React from 'react';

const Test = () => {
  return null;
};

export default function Detail({ post, categories, next, prev, moreBlogs }) {
  return (
    <main>
      <Test post={post} categories={categories} next={next} prev={prev} moreBlogs={moreBlogs} />
    </main>
  );
}
