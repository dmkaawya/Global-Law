import { useState, useCallback } from 'react';

export type Lang = 'en' | 'si';

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('gl_lk_lang');
    return (saved === 'si' ? 'si' : 'en') as Lang;
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('gl_lk_lang', l);
  }, []);

  const t = useCallback((obj: { en: string; si: string } | undefined) => {
    if (!obj) return '';
    return obj[lang] || obj.en || '';
  }, [lang]);

  return { lang, setLang, t };
}
