import { Home } from '@components/pages';
import { fetchDataByGet } from '@service/strapi';
import { asSeo } from '@utilities';
import { getCMSDomain } from '@utilities/dev';

export default function Index({ banners }) {
  return <Home banners={banners} />;
}

export async function getStaticProps() {
  let seo = null;
  let banners = [];

  if (getCMSDomain()) {
    seo = await fetch(
      fetchDataByGet('/routes', {
        linkTo: '/',
      })
    )
      .then((res) => res.json())
      .then((data) => data[0]);

    banners = await fetch(fetchDataByGet('/banners')).then((res) => res.json());
  }

  seo = asSeo(seo);

  return {
    props: {
      seo,
      banners,
    },
    revalidate: 10,
  };
}
