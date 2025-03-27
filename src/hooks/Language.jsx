import { useState } from 'react';
import AustraliaFlag from '../assets/globals/australia-flag.svg';
import GermanyFlag from '../assets/globals/germany-flag.svg';
import { useTranslation } from 'react-i18next';

export const languages = [
  { id: 1, name: 'English', code: 'en', flagImage: AustraliaFlag },
  { id: 2, name: 'Español', code: 'es', flagImage: GermanyFlag },
];

const useLanguage = () => {
  const [selectedLanguage, setLanguage] = useState(languages[0]);
  const { i18n } = useTranslation();

  const onSetLanguage = (language) => {
    setLanguage(language);
    i18n.changeLanguage(language.code);
  };

  return { selectedLanguage, onSetLanguage };
};

export default useLanguage;
