import React, { useEffect, useRef, useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';

import PropTypes from 'prop-types';

import '../styles/Dropdown.css';

const MyDropdown = ({ title, options, selectedOption, setSelectedOption }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = option => {
    setSelectedOption(option === 'Reset' ? title : option);
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
        <DropdownTitle title={title} selectedOption={selectedOption} /> <FaChevronDown />
      </button>
      <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
        {options.map(option => (
          <button key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

function DropdownTitle({ title, selectedOption }) {
  return (
    <span>
      {title}: {selectedOption}
    </span>
  );
}

MyDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};

DropdownTitle.propTypes = {
  title: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default MyDropdown;
