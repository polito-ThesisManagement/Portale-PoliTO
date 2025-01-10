import React, { useContext, useState } from 'react';

import { Dropdown, Pagination } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/Pagination.css';
import { getSystemTheme } from '../utils/utils';
import CustomMenu from './CustomMenu';
import CustomToggle from './CustomToggle';

export default function PaginationItem({
  count,
  currentPage,
  handleProposalsPerPageChange,
  handlePageChange,
  pageNumbers,
  proposalsPerPage,
  totalPages,
}) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const options = [5, 10, 20, 50];
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
  };

  let startIndex;
  if (totalPages === 0) {
    startIndex = 0;
  } else if (currentPage === 1) {
    startIndex = 1;
  } else {
    startIndex = (currentPage - 1) * proposalsPerPage + 1;
  }

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span> {t('carriera.proposte_di_tesi.per_page')} </span>
        <Dropdown autoClose="outside" className="ms-3" id="dropdown-pagination" onToggle={handleToggle}>
          <Dropdown.Toggle as={CustomToggle} className={`btn-outlined-${appliedTheme}  custom-dropdown-toggle`}>
            <span style={{ width: '1.5rem', fontSize: 'var(--font-size-sm)' }}> {proposalsPerPage} </span>
            {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
          </Dropdown.Toggle>
          <Dropdown.Menu
            as={CustomMenu}
            key={proposalsPerPage}
            style={{
              minWidth: '4rem',
              fontSize: 'var(--font-size-sm)',
              borderColor: 'var(--dropdown-outlined-border)',
            }}
          >
            {options.map(option => (
              <Dropdown.Item key={option} onClick={() => handleProposalsPerPageChange({ target: { value: option } })}>
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <span className="ms-3 me-3 pagination-text">
          {t('carriera.proposte_di_tesi.showing')} {totalPages === 0 ? 0 : startIndex}{' '}
          {t('carriera.proposte_di_tesi.to')}{' '}
          {currentPage * proposalsPerPage > count ? count : currentPage * proposalsPerPage}{' '}
          {t('carriera.proposte_di_tesi.of')} {count}
        </span>
      </div>
      <div className="pagination-controls">
        {totalPages > 0 && (
          <Pagination
            className="d-flex flex-wrap justify-content-center"
            onChange={handlePageChange}
            style={{ margin: '0', gap: '.25rem' }}
            size="sm"
          >
            <Pagination.First
              onClick={() => handlePageChange(1)}
              linkClassName={`btn-outlined-${appliedTheme} ${currentPage === 1 ? 'disabled' : ''}`}
              disabled={currentPage === 1}
            />
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              linkClassName={`btn-outlined-${appliedTheme} ${currentPage === 1 ? 'disabled' : ''}`}
              disabled={currentPage === 1}
            />
            {pageNumbers.map((number, index) =>
              number === '...' ? (
                <Pagination.Ellipsis
                  key={`ellipsis-${number}-${index}`}
                  linkClassName={`btn-outlined-${appliedTheme}`}
                />
              ) : (
                <Pagination.Item
                  key={number}
                  active={number === currentPage}
                  linkClassName={`btn-outlined-${appliedTheme} ${number === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </Pagination.Item>
              ),
            )}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              linkClassName={`btn-outlined-${appliedTheme} ${currentPage === totalPages ? 'disabled' : ''}`}
              disabled={currentPage === totalPages}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              linkClassName={`btn-outlined-${appliedTheme} ${currentPage === totalPages ? 'disabled' : ''}`}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}
      </div>
    </div>
  );
}

PaginationItem.propTypes = {
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleProposalsPerPageChange: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  pageNumbers: PropTypes.array.isRequired,
  proposalsPerPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
