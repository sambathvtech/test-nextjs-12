import React from 'react';
import { RecoilRoot } from 'recoil';
import '../styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Main } from '@components/common';
import MainLayout from '@layout/mainlayout';
import { seoDefualt } from '../constants';

const config = {
  enableRecoil: false,
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let appElem = (
    <Layout>
      <Main.HeadNextSeo dataSource={pageProps?.seo || seoDefualt} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Layout>
  );

  if (config.enableRecoil) {
    appElem = <RecoilRoot>{appElem}</RecoilRoot>;
  }

  return appElem;
}

export default MyApp;
