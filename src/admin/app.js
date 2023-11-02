import logo from "./extensions/logo.svg";
import favicon from "./extensions/infinity.svg";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  auth: {
    logo: logo,
  },
  menu: {
    logo: favicon,
  },
  head: {
    favicon: favicon,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "ERM Dashboard",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
