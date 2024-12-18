import React, { useEffect, useRef, useState } from 'react';

import { FaChevronDown, FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import PropTypes from 'prop-types';

import '../styles/Dropdown.css';

const FilterDropdown = ({ title, options, selectedOption, setSelectedOption, orderBy, setOrderBy }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = option => {
    setSelectedOption(option === 'Reset' ? '' : option);
    setShowDropdown(false);
  };

  const handleOrderButton = () => {
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc');
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
        {orderBy && setOrderBy && (
          <button
            className="order-button"
            onClick={e => {
              e.stopPropagation();
              handleOrderButton();
            }}
          >
            {orderBy === 'asc' ? <FaSortAmountUpAlt /> : <FaSortAmountDownAlt />}
          </button>
        )}
        <DropdownTitle title={title} selectedOption={selectedOption} /> <FaChevronDown />
      </button>
      <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
        {options.map(option => (
          <button key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
        <button onClick={() => handleOptionClick('Reset')}>Reset</button>
      </div>
    </div>
  );
};

function DropdownTitle({ title, selectedOption }) {
  if (selectedOption === '') {
    return <span>{title}</span>;
  } else {
    return (
      <span>
        {title}: {selectedOption}
      </span>
    );
  }
}

FilterDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  orderBy: PropTypes.string,
  setOrderBy: PropTypes.func,
};

DropdownTitle.propTypes = {
  title: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default FilterDropdown;
