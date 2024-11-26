import { useContext } from 'react';

import { ThemeContext } from '../App';

export const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

export const getLogo = (logoDark, logoLight) => {
  const { theme } = useContext(ThemeContext);
  if (theme === 'auto') return getSystemTheme() === 'dark' ? logoLight : logoDark;
  return theme === 'dark' ? logoLight : logoDark;
};
