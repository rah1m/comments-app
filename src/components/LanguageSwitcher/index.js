import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { languagesOptions } from 'constants/languages';

import { initialLanguage } from '../../utils/storage';
import customStyles from './selectStyles';

const LanguageSwithcer = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = ({ value }) => {
    i18n.changeLanguage(value);
  };
  const initialOption = {
    value: initialLanguage(),
    label: initialLanguage().toUpperCase(),
  };
  return (
    <Select
      onChange={handleChangeLanguage}
      isSearchable={false}
      defaultValue={initialOption}
      options={languagesOptions}
      styles={customStyles}
    />
  );
};

export default LanguageSwithcer;
