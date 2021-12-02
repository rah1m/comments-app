import { languagesOptions } from 'constants/languages';

export const initialLanguage = () => {
  const initialLang = localStorage.getItem('i18nextLng') || 'en';
  if (languagesOptions.map((item) => item.value).includes(initialLang)) {
    return initialLang;
  }

  return 'en';
};
