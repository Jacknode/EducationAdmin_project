// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
// import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...ELEMENT.lang.en
  },
  zh: {
    ...zhLocale,
    ...ELEMENT.lang.zhCN
  }
};

const i18n = new VueI18n({
  locale:  'zh', // set locale Cookies.get('language') ||
  messages // set locale messages
});

export default i18n
