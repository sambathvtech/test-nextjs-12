import { en, zh } from '@locales';

export const tran = (locale) => {
  switch (locale) {
    case 'en':
      return { locale: en, cx: `en` };
    case 'zh':
      return { locale: zh, cx: `zh` };
    default:
      return { locale: zh, cx: `zh` };
  }
};
