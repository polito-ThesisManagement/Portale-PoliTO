import { React, useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa6';

import '../styles/Utilities.css';
import { scrollTop } from '../utils/utils';

function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

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
    <Button className="floating-button" onClick={scrollTop} style={{ display: isVisible ? 'flex' : 'none' }}>
      <FaArrowUp size={16} />
    </Button>
  );
}

export default FloatingButton;
