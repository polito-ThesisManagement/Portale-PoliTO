import React, { useContext, useEffect, useState } from 'react';

import { Button, Dropdown, Form, InputGroup, Spinner } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/CustomDropdown.css';
import { getSystemTheme } from '../utils/utils';
import Badge from './Badge';
import CustomMenu from './CustomMenu';
import CustomToggle from './CustomToggle';

export default function FilterDropdown({
  api,
  filters,
  icon,
  itemType,
  onApplyFilters,
  onResetFilters,
  selectedItems: parentSelectedItems,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState(parentSelectedItems || []);
  const [searchValue, setSearchValue] = useState('');

  const { t, i18n } = useTranslation();

  useEffect(() => {
    setSelectedItems(parentSelectedItems || []);
  }, [parentSelectedItems]);

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
    if (!isOpen) {
      setSearchValue('');
    }
  };

  const handleItemSelect = id => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(id) ? prevSelected.filter(k => k !== id) : [...prevSelected, id],
    );
  };

  const handleReset = () => {
    setIsOpen(false);
    setSearchValue('');
    onResetFilters(itemType);
  };

  const handleApply = () => {
    setIsOpen(false);
    onApplyFilters(itemType, selectedItems);
  };

  useEffect(() => {
    setLoading(true);
    if (isOpen) {
      api(i18n.language)
        .then(response => {
          setItems(response);
        })
        .catch(error => {
          console.error('Error fetching items', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen, i18n.language]);

  const filteredItems = items.filter(item => {
    if (itemType === 'keyword') {
      return item.keyword.toLowerCase().includes(searchValue.toLowerCase());
    } else if (itemType === 'teacher') {
      return (
        item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      return item.type.toLowerCase().includes(searchValue.toLowerCase());
    }
  });

  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  let label;
  if (itemType === 'keyword') {
    label = t('carriera.proposte_di_tesi.keywords');
  } else if (itemType === 'teacher') {
    label = t('carriera.proposte_di_tesi.teachers');
  } else {
    label = t('carriera.proposte_di_tesi.types');
  }

  const getEventKey = item => {
    if (itemType === 'keyword') {
      return item.keyword;
    } else if (itemType === 'teacher') {
      return item.firstName + ' ' + item.lastName;
    } else {
      return item.type;
    }
  };

  const dropdownItems =
    filteredItems && filteredItems.length > 0 ? (
      filteredItems.map(item => (
        <Dropdown.Item
          key={item.id}
          eventKey={getEventKey(item)}
          className="custom-dropdown-item"
          onClick={() => handleItemSelect(item.id)}
        >
          <div className="d-flex justify-content-between align-items-center">
            <Form.Check
              type="checkbox"
              id={item.id}
              label={
                <Badge
                  variant={itemType}
                  content={itemType === 'teacher' ? item.firstName + ' ' + item.lastName : item[itemType]}
                />
              }
              checked={selectedItems.includes(item.id)}
              readOnly
              style={{
                whiteSpace: 'nowrap',
                overflow: 'visible',
                display: 'inline-block',
                width: '100%',
                fontSize: 'var(--font-size-sm)',
              }}
            />
          </div>
        </Dropdown.Item>
      ))
    ) : (
      <Dropdown.Item
        disabled
        style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--primary)',
          textAlign: 'center',
          marginBottom: '1rem',
          marginTop: '.5rem',
        }}
      >
        {t('carriera.proposte_di_tesi.no_item_found')}
      </Dropdown.Item>
    );

  return (
    <Dropdown onToggle={handleToggle} show={isOpen} autoClose="outside" id={`dropdown-${itemType}`}>
      <Dropdown.Toggle as={CustomToggle} active={isOpen}>
        {icon}
        <span
          style={{
            margin: '0 0.5rem',
          }}
        >
          {label}
        </span>
        {/* Display the count of applied filters */}
        {filters.length > 0 && (
          <span
            style={{
              backgroundColor: 'var(--secondary-600)',
              color: 'var(--white)',
              borderRadius: '50rem',
              padding: '0px 0.5rem',
              marginRight: '0.5rem',
              fontSize: 'var(--font-size-sm)',
            }}
          >
            {filters.length}
          </span>
        )}
        {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
      </Dropdown.Toggle>

      <Dropdown.Menu
        as={CustomMenu}
        key={selectedItems.join(',')}
        style={{ width: '300px' }}
        className="custom-dropdown-menu"
      >
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <InputGroup className="flex-nowrap w-100">
            <Form.Control
              className="my-2 mx-2 truncated"
              type="search"
              aria-label="Search"
              size="md"
              placeholder={`Search in ${itemType}s...`}
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--primary)',
                borderRadius: '10px',
              }}
            />
            <Search
              style={{
                position: 'absolute',
                zIndex: '3',
                right: '21px',
                top: '18px',
                color: 'var(--primary)',
              }}
            />
          </InputGroup>
        </div>
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {loading ? (
            <Dropdown.Item disabled style={{ textAlign: 'center' }} className="custom-dropdown-item">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '2rem',
                }}
              >
                <Spinner animation="border" size="sm" style={{ color: 'var(--primary)' }}>
                  <output className="visually-hidden">{t('carriera.proposte_di_tesi.loading')}</output>
                </Spinner>
              </div>
            </Dropdown.Item>
          ) : (
            dropdownItems
          )}
        </div>

        <Dropdown.Divider style={{ margin: '0' }} />
        {/* Buttons outside the scrollable area */}
        <div className="d-flex justify-content-between ms-2 me-3 mt-2">
          <Button className={`link-${appliedTheme}-dropdown`} onClick={handleReset} variant="link" size="sm">
            Reset
          </Button>
          <Button
            className={`btn-${appliedTheme} btn-dropdown`}
            id="dropdown-button"
            onClick={handleApply}
            variant="outline-primary"
            size="sm"
          >
            OK
          </Button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

FilterDropdown.propTypes = {
  api: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  icon: PropTypes.node.isRequired,
  itemType: PropTypes.string.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
  selectedItems: PropTypes.array.isRequired,
};
