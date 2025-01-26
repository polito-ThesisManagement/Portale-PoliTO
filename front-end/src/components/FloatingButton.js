import { React, useContext, useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { FaChevronUp } from 'react-icons/fa6';

import { ThemeContext } from '../App';
import '../styles/Utilities.css';
import { getSystemTheme, scrollTop } from '../utils/utils';

function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const handleScroll = () => {
    if (window.scrollY > 100) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      className={`floating-button floating-button-${appliedTheme}`}
      onClick={scrollTop}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <FaChevronUp size={16} />
    </Button>
  );
}

export default FloatingButton;
