import React, { useEffect, useRef, useState } from 'react';

import '../styles/Dropdown.css';

const MyDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Ordina per');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = option => {
    setSelectedOption(option === 'Reset' ? 'Ordina per' : option);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption}
      </button>
      <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
        <button onClick={() => handleOptionClick('Option 1')}>Option 1</button>
        <button onClick={() => handleOptionClick('Option 2')}>Option 2</button>
        <button onClick={() => handleOptionClick('Option 3')}>Option 3</button>
        <button onClick={() => handleOptionClick('Reset')}>Reset</button>
      </div>
    </div>
  );
};

export default MyDropdown;
