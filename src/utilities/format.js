/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import N from 'numeral';
import { getCMSDomain } from './dev';

export const asDollar = (n = 0) => N(n).format('0,0.00');
export const asNumber = (n = 0) => N(n).format('0,0');

export const asFaq = (arr) =>
  arr.map((load) => ({
    questionName: load.questionName,
    acceptedAnswerText: load.acceptedAnswerText,
  }));

export const asImgLoader = ({ src, width, quality }) => {
  return `${getCMSDomain()}/${src}?w=${width}&q=${quality || 75}`;
};

export const asSeo = (obj) =>
  obj
    ? {
        linkTo: obj?.linkTo,
        seo: obj,
      }
    : {};

export const sitemapField = (loc) => {
  return {
    loc,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '0.7',
  };
};

export function youtubeURLParser(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  if (match && match[7].length === 11) return `https://www.youtube.com/embed/${match[7]}`;
  return false;
}

export const getDataBySiteId = (data, site1) => {
  const arr = [];

  for (const load of data) {
    if (load.related || load.related.length > 0) {
      for (const load1 of load.related) {
        const check = load1?.sites.findIndex((ele) => ele === site1);
        if (check > -1) {
          arr.push({
            id: load.id,
            url: load.url,
          });
          break;
        }
      }
    }
  }

  return arr;
};

export const getDataBySiteIdByContentType = (data) => {
  const arr = [];

  for (const load of data) {
    if (load.related || load.related.length > 0) {
      for (const load1 of load.related) {
        const check = load1?.__contentType.findIndex((ele) => ele === 'SitePosts');
        if (check > -1) {
          arr.push(load);
          break;
        }
      }
    }
  }

  return arr;
};
