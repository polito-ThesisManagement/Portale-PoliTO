import React, { useContext, useEffect, useState } from 'react';

import { Badge as BadgeBootstrap, Button, Dropdown, Form, InputGroup, Spinner } from 'react-bootstrap';
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
  applyFilters,
  selectedItems: parentSelectedItems,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState(parentSelectedItems || []);
  const [searchValue, setSearchValue] = useState('');

  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  useEffect(() => {
    setSelectedItems(parentSelectedItems || []);
  }, [parentSelectedItems]);

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

  const handleApply = () => {
    setIsOpen(false);
    setSearchValue('');
    applyFilters(itemType, selectedItems);
  };

  const handleItemSelect = item => {
    setSelectedItems(prevSelected =>
      prevSelected.map(i => i.id).includes(item.id)
        ? prevSelected.filter(i => i.id !== item.id)
        : [
            ...prevSelected,
            { id: item.id, content: itemType === 'teacher' ? item.firstName + ' ' + item.lastName : item[itemType] },
          ],
    );
  };

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
    if (!isOpen) {
      setSearchValue('');
      setSelectedItems(parentSelectedItems || []);
    }
  };

  const handleReset = () => {
    setIsOpen(false);
    setSearchValue('');
    applyFilters(itemType, []);
  };

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

  let label;
  if (itemType === 'keyword') {
    label = t('carriera.proposte_di_tesi.keywords');
  } else if (itemType === 'teacher') {
    label = t('carriera.proposte_di_tesi.teachers');
  } else {
    label = t('carriera.proposte_di_tesi.types');
  }

  const dropdownItems =
    filteredItems && filteredItems.length > 0 ? (
      filteredItems.map(item => (
        <Dropdown.Item key={item.id} className="custom-dropdown-item" onClick={() => handleItemSelect(item)}>
          <Form.Check
            type="checkbox"
            key={selectedItems.map(i => i.id).includes(item.id)}
            id={item.id}
            label={
              <Badge
                variant={itemType}
                content={itemType === 'teacher' ? item.firstName + ' ' + item.lastName : item[itemType]}
              />
            }
            checked={selectedItems.map(i => i.id).includes(item.id)}
            readOnly
          />
        </Dropdown.Item>
      ))
    ) : (
      <Dropdown.Item
        disabled
        className="mb-3 mt-2"
        style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--primary)',
          textAlign: 'center',
        }}
      >
        {t('carriera.proposte_di_tesi.no_item_found')}
      </Dropdown.Item>
    );

  return (
    <Dropdown onToggle={handleToggle} show={isOpen} autoClose="outside" id={`dropdown-${itemType}`}>
      <Dropdown.Toggle as={CustomToggle} className={`btn-${appliedTheme} custom-dropdown-toggle`}>
        {icon}
        {label}
        {/* Display the count of applied filters */}
        {filters.length > 0 && (
          <BadgeBootstrap pill bg="secondary">
            {filters.length}
          </BadgeBootstrap>
        )}
        {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} style={{ width: '300px' }} className="custom-dropdown-menu">
        <InputGroup>
          <Form.Control
            className="my-2 mx-2 truncated"
            type="search"
            placeholder={`Search in ${itemType}s...`}
            aria-label="Search"
            size="md"
            style={{
              backgroundColor: 'var(--background)',
              color: 'var(--primary)',
              borderRadius: '10px',
            }}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
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
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {loading ? (
            <Dropdown.Item disabled className="custom-dropdown-item text-center">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '2rem' }}>
                <Spinner animation="border" size="sm" style={{ color: 'var(--primary)' }}>
                  <output className="visually-hidden">{t('carriera.proposte_di_tesi.loading')}</output>
                </Spinner>
              </div>
            </Dropdown.Item>
          ) : (
            dropdownItems
          )}
        </div>

        <Dropdown.Divider style={{ margin: '0' }} className={`hr-${appliedTheme}`} />
        {/* Buttons outside the scrollable area */}
        <div className="d-flex justify-content-between ms-2 me-3 mt-2 mb-1">
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
  applyFilters: PropTypes.func.isRequired,
  selectedItems: PropTypes.array.isRequired,
};
