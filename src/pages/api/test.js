// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const download = require('images-downloader').images;

export default async (req, res) => {
  const dest = '/Users/vtech/Downloads/test';

  // An array of image(s) to download
  const images = ['https://cdn-msp.18comic.org/media/photos/476385/00002.webp?v=1693911057'];

  download(images, dest)
    .then((result) => {
      console.log('Images downloaded', result);
    })
    .catch((error) => console.log('downloaded error', error));

  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
