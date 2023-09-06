import React from 'react';
import Align from './align';
import Banner from './banner';
import Content from './content';
import Faq from './faq';
import Title from './title';
import Video from './video';

function ArticlePart({ type, data, post }) {
  switch (type) {
    case 'content-section.section-title':
      return <Title data={data} post={post} />;
    case 'content-section.section-content':
      return <Content data={data} />;
    case 'content-section.section-align':
      return <Align data={data} />;
    case 'content-section.section-banner':
      return <Banner data={data} />;
    case 'content-section.section-faq':
      return <Faq dataSource={post?.faq} />;
    case 'content-section.section-video':
      return <Video data={data} />;
    default:
      return null;
  }
}

export default function Article({ post, method = 'content' }) {
  return (
    <div>
      {post[method].length > 0 && (
        <section>
          {post?.content?.map((load) => {
            // eslint-disable-next-line no-underscore-dangle
            const type = load.__component;
            return <ArticlePart key={type + load?.id} type={type} data={load} post={post} />;
          })}
        </section>
      )}
    </div>
  );
}
