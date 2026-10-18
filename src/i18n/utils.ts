import { es } from './locales/es';
import { en } from './locales/en';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es,
  en,
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof es) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
