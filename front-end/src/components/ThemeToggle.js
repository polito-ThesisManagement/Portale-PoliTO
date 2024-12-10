import React, { useContext } from 'react';

import { FaCircleHalfStroke, FaMoon, FaSun } from 'react-icons/fa6';

import { ThemeContext } from '../App';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="theme-toggle-container">
        <div className="theme-toggle">
          <label htmlFor="theme-toggle-radio1">
            <FaCircleHalfStroke size={24} />
          </label>
          <input
            type="radio"
            id="theme-toggle-radio1"
            name="radio"
            style={{ display: 'none' }}
            checked={theme === 'auto'}
            onChange={() => setTheme('auto')}
          />
          <label htmlFor="theme-toggle-radio2">
            <FaSun size={24} />
          </label>
          <input
            type="radio"
            id="theme-toggle-radio2"
            name="radio"
            style={{ display: 'none' }}
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
          />
          <label htmlFor="theme-toggle-radio3">
            <FaMoon size={24} />
          </label>
          <input
            type="radio"
            id="theme-toggle-radio3"
            name="radio"
            style={{ display: 'none' }}
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
          />
        </div>
      </div>
    </div>
  );
}
