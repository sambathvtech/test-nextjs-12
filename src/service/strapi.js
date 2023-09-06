import { getCMSDomain } from '@utilities/dev';

export const fetchDataByGet = (url, params = {}) => {
  const newParams = `?sites.domain=${process?.env?.NEXT_PUBLIC_API_URL || '/'}&${
    Object.keys(params).length > 0 ? `${new URLSearchParams(params).toString()}` : ''
  }`;

  return `${getCMSDomain()}${url}${newParams}`;
};

export const fetchImage = (url) => {
  return `${getCMSDomain()}${url}`;
};

export const requestInit = (body, method = 'POST') => {
  return {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'fr-FR,fr;q=0.9,en;q=0.8',
      'content-type': 'application/json;charset=UTF-8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrerPolicy: 'strict-origin-when-cross-origin',
    method,
    body: JSON.stringify(body),
    mode: 'cors',
  };
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
