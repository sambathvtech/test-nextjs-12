/* eslint-disable no-console */
import mockData from '@constants/mocks.json';

const download = require('images-downloader').images;

export default async (req, res) => {
  const start = parseInt(req.query.start, 10);
  const limit = parseInt(req.query.limit, 10);

  const downloadImages = mockData.data.splice(start, limit);

  console.log(downloadImages?.length);

  const dest = `/Users/vtech/Downloads/download-images`;

  download(downloadImages, dest)
    .then((result) => {
      console.log('Images downloaded', result);
    })
    .catch((error) => console.log('downloaded error', error));

  res.statusCode = 200;
  res.json({ dataCount: start + limit });
};
