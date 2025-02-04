import React, { useContext, useEffect, useState } from 'react';

import { Badge, Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  faArrowDownShortWide,
  faArrowUpShortWide,
  faCheck,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/custom-dropdown.css';
import { getSystemTheme } from '../utils/utils';
import CustomMenu from './CustomMenu';
import CustomToggle from './CustomToggle';

export default function SortDropdown({ sortFields, sorting, applySorting }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState(sorting || '');

  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  useEffect(() => {
    // Sync sorting with the parent component
    setSelectedSorting(sorting);
  }, [sorting]);

  const handleApply = ({ sortBy: selectedSort, orderBy: selectedOrder }) => {
    setIsOpen(false);
    const newSorting = { sortBy: selectedSort, orderBy: selectedOrder };
    setSelectedSorting(newSorting);
    applySorting(newSorting, sorting);
  };

  const handleChangeOrderExternal = order => {
    setSelectedSorting({ ...sorting, orderBy: order });
    handleApply({ sortBy: sorting.sortBy, orderBy: order });
  };

  const handleReset = () => {
    setIsOpen(false);
    applySorting({ sortBy: 'id', orderBy: 'ASC' });
  };

  const handleSelect = sortBy => {
    if (selectedSorting.sortBy === sortBy) {
      setSelectedSorting({ ...selectedSorting, sortBy: 'id' });
    } else {
      setSelectedSorting({ ...sorting, sortBy });
    }
  };

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
    if (!isOpen) {
      setSelectedSorting(sorting);
    }
  };

  return (
    <Dropdown onToggle={handleToggle} show={isOpen} autoClose="outside" id="dropdown-sort">
      <Dropdown.Toggle as={CustomToggle} className={`btn-${appliedTheme}  custom-dropdown-toggle`}>
        {selectedSorting.orderBy === 'ASC' ? (
          <FontAwesomeIcon
            icon={faArrowUpShortWide}
            onClick={e => {
              e.stopPropagation();
              handleChangeOrderExternal('DESC');
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowDownShortWide}
            onClick={e => {
              e.stopPropagation();
              handleChangeOrderExternal('ASC');
            }}
          />
        )}
        {t('carriera.proposte_di_tesi.order')}
        {/* Display the count of applied sorting */}
        {sorting.sortBy !== 'id' && (
          <Badge pill bg="secondary" className="top-0">
            1
          </Badge>
        )}
        {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu} key={selectedSorting} className="custom-dropdown-menu">
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {sortFields.map(sortBy => (
            <Dropdown.Item className="custom-dropdown-item" key={'sort' + sortBy} onClick={() => handleSelect(sortBy)}>
              <div className="d-flex align-items-center w-100">
                <div style={{ width: '1.5em' }}>
                  {selectedSorting.sortBy === sortBy && <FontAwesomeIcon icon={faCheck} />}
                </div>
                {t(`carriera.proposte_di_tesi.${sortBy}`)}
              </div>
            </Dropdown.Item>
          ))}
        </div>

        <Dropdown.Divider style={{ margin: '0' }} className={`hr-${appliedTheme}`} />
        {/* Buttons outside the scrollable area */}
        <div className="d-flex justify-content-between ms-2 me-3 mt-2 mb-1">
          <Button className={`link-${appliedTheme}-dropdown`} onClick={() => handleReset()} variant="link" size="sm">
            Reset
          </Button>
          <Button
            className={`btn-${appliedTheme} btn-dropdown`}
            id="dropdown-button"
            onClick={() => handleApply(selectedSorting)}
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
  applySorting: PropTypes.func.isRequired,
  sorting: PropTypes.object.isRequired,
};
