/* next.config.js  */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const cmsPath =
  process?.env?.NEXT_PUBLIC_CMS_URL === undefined
    ? '/'
    : process?.env?.NEXT_PUBLIC_CMS_URL.replace(/^https?:\/\//, '');

module.exports = withPWA({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: [cmsPath],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    runtimeCaching,
    sw: 'service-worker.js',
  },
});
