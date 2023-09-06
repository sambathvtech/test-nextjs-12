import { fetchDataByGet } from '@service/strapi';
import { sitemapField } from '@utilities';
import { getCMSDomain, getDomain } from '@utilities/dev';
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const pathSlug = '/category';
  const fields = [];
  if (getCMSDomain()) {
    await fetch(fetchDataByGet('/categories'))
      .then((resData) => resData.json())
      .then((data) =>
        data.map((load) => {
          return fields.push(sitemapField(`${getDomain()}${pathSlug}${load.linkTo}`));
        })
      );
  }

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
