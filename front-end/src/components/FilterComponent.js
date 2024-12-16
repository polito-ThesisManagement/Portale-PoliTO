import React, { useEffect, useState } from 'react';

import { Button, Dropdown, Form, InputGroup, Spinner } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import Badge from './Badge';

export default function FilterComponent({
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
    // Sincronizza il valore dei selectedItems con il genitore
    setSelectedItems(parentSelectedItems || []);
  }, [parentSelectedItems]);

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
  };

  const handleItemSelect = id => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(id) ? prevSelected.filter(k => k !== id) : [...prevSelected, id],
    );
  };

  const handleReset = () => {
    setIsOpen(false);
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

  return (
    <Dropdown onToggle={handleToggle} show={isOpen} autoClose="outside">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <div
          style={{
            alignItems: 'center',
            borderRadius: '0.375rem',
            border: '0.0625rem solid var(--tag-border)',
            backgroundColor: 'var(--tag-bg)',
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'var(--tag-text)',
            padding: '0px 6px',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-md)',
            width: 'fit-content',
            height: '2rem',
          }}
        >
          {icon}
          <span
            style={{
              margin: '0px 0.5rem',
            }}
          >
            {itemType.charAt(0).toUpperCase() + itemType.slice(1) + 's'}
          </span>
          {/* Display the count of applied filters */}
          {filters.length > 0 && (
            <span
              style={{
                backgroundColor: 'var(--medium-orange)',
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
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu
        as={CustomMenu}
        key={selectedItems.join(',')}
        style={{
          width: itemType == 'keyword' ? '350px' : '300px',
          boxShadow: '0 0 4px 0 rgba(var(--background-inverted-rgb), 0.25)',
        }}
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
            <Dropdown.Item disabled style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '2rem',
                }}
              >
                <Spinner animation="border" size="sm" role="status" style={{ color: 'var(--primary)' }}>
                  <span className="visually-hidden">{t('carriera.proposte_di_tesi.loading')}</span>
                </Spinner>
              </div>
            </Dropdown.Item>
          ) : filteredItems && filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <Dropdown.Item
                key={item.id}
                eventKey={
                  itemType === 'keyword'
                    ? item.keyword
                    : itemType === 'teacher'
                      ? item.firstName + ' ' + item.lastName
                      : item.type
                }
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
                    onChange={() => handleItemSelect(item.id)}
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
          )}
        </div>

        <Dropdown.Divider style={{ margin: '0' }} />
        {/* Buttons outside the scrollable area */}
        <div className="d-flex justify-content-between ms-2 me-3 mt-2">
          <Button variant="link" onClick={handleReset} size="sm">
            Reset
          </Button>
          <Button variant="primary" onClick={handleApply} size="sm" id="dropdown-button">
            OK
          </Button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    type="button"
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
  >
    {children}
  </button>
));

CustomToggle.displayName = 'CustomToggle';

CustomToggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
  <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
    {children}
  </div>
));

CustomMenu.displayName = 'CustomMenu';

CustomMenu.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  'aria-labelledby': PropTypes.string,
};

FilterComponent.propTypes = {
  api: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  icon: PropTypes.node.isRequired,
  itemType: PropTypes.string.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
  selectedItems: PropTypes.array.isRequired,
};
