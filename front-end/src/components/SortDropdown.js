import React, { useContext, useEffect, useState } from 'react';

import { Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaArrowDownShortWide, FaArrowUpShortWide, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/CustomDropdown.css';
import { getSystemTheme } from '../utils/utils';
import CustomMenu from './CustomMenu';
import CustomToggle from './CustomToggle';

export default function SortDropdown({ sortFields, sorting, onApplySorting, onResetSorting }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(sorting || '');
  const [selectedSort, setSelectedSort] = useState(sorting.sortBy || '');
  const [selectedOrder, setSelectedOrder] = useState(sorting.orderBy || '');

  const { t } = useTranslation();

  useEffect(() => {
    // Sync sorting with the parent component
    setSelectedItem(sorting || '');
  }, [sorting]);

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
  };

  const handleReset = () => {
    setIsOpen(false);
    onResetSorting();
  };

  const handleApply = ({ sortBy: selectedSort, orderBy: selectedOrder }) => {
    setIsOpen(false);
    const newSorting = { sortBy: selectedSort, orderBy: selectedOrder };
    setSelectedItem(newSorting);
    onApplySorting(newSorting, sorting);
  };

  const handleChangeOrderExternal = order => {
    setSelectedOrder(order);
    if (selectedSort) {
      handleApply({ sortBy: selectedSort, orderBy: order });
    } else {
      setSelectedSort(sorting.sortBy);
      handleApply({ sortBy: sorting.sortBy, orderBy: order });
    }
  };

  const handleSelect = sortBy => {
    if (selectedSort === sortBy) {
      setSelectedSort('id');
    } else {
      setSelectedSort(sortBy);
    }
  };

  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  return (
    <Dropdown onToggle={handleToggle} show={isOpen} autoClose="outside" id="dropdown-sort">
      <Dropdown.Toggle as={CustomToggle} active={isOpen}>
        {selectedOrder === 'ASC' ? (
          <FaArrowUpShortWide
            onClick={e => {
              e.stopPropagation();
              handleChangeOrderExternal('DESC');
            }}
          />
        ) : (
          <FaArrowDownShortWide
            onClick={e => {
              e.stopPropagation();
              handleChangeOrderExternal('ASC');
            }}
          />
        )}
        <span
          style={{
            margin: '0px 0.5rem',
          }}
        >
          {t('carriera.proposte_di_tesi.order')}
        </span>
        {/* Display the count of applied sorting */}
        {sorting.sortBy !== 'id' && (
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
            1
          </span>
        )}
        {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu} key={selectedItem} className="custom-dropdown-menu">
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {sortFields.map(sortBy => (
            <Dropdown.Item className="custom-dropdown-item" key={'sort' + sortBy} onClick={() => handleSelect(sortBy)}>
              <div className="d-flex align-items-center" style={{ width: '100%' }}>
                <div style={{ width: '1.5em' }}>
                  {(selectedSort ? selectedSort === sortBy : sorting.sortBy === sortBy) && (
                    <FaCheck style={{ color: 'var(--primary)' }} />
                  )}
                </div>
                {t(`carriera.proposte_di_tesi.${sortBy}`)}
              </div>
            </Dropdown.Item>
          ))}
        </div>

        <Dropdown.Divider style={{ margin: '0' }} />
        {/* Buttons outside the scrollable area */}
        <div className="d-flex justify-content-between ms-2 me-3 mt-2">
          <Button
            className={`link-${appliedTheme}-dropdown`}
            onClick={() => {
              setSelectedSort('');
              setSelectedOrder('ASC');
              handleReset();
            }}
            variant="link"
            size="sm"
          >
            Reset
          </Button>
          <Button
            className={`btn-${appliedTheme} btn-dropdown`}
            id="dropdown-button"
            onClick={() => handleApply({ sortBy: selectedSort, orderBy: selectedOrder })}
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

SortDropdown.propTypes = {
  sortFields: PropTypes.array.isRequired,
  onApplySorting: PropTypes.func.isRequired,
  sorting: PropTypes.object.isRequired,
  onResetSorting: PropTypes.func.isRequired,
};
