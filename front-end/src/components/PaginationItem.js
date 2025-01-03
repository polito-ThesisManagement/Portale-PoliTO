import React from 'react';

import { Form, InputGroup, Pagination } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import '../styles/Pagination.css';

export default function PaginationItem({
  count,
  currentPage,
  handleProposalsPerPageChange,
  handlePageChange,
  pageNumbers,
  proposalsPerPage,
  totalPages,
}) {
  let startIndex;
  if (totalPages === 0) {
    startIndex = 0;
  } else if (currentPage === 1) {
    startIndex = 1;
  } else {
    startIndex = (currentPage - 1) * proposalsPerPage + 1;
  }
  const { t } = useTranslation();
  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span style={{ color: 'var(--text)' }}> {t('carriera.proposte_di_tesi.per_page')} </span>
        <Form className="d-flex ms-3 w-100" style={{ maxWidth: '70px' }}>
          <InputGroup className="flex-nowrap w-100">
            <Form.Select
              label="page_elements"
              style={{
                color: 'var(--text)',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--border-radius)',
                lineHeight: '1rem',
                fontFamily: 'var(--font-family)',
              }}
              value={proposalsPerPage}
              onChange={handleProposalsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Form.Select>
          </InputGroup>
        </Form>
        <span style={{ color: 'var(--text)' }} className="ms-3 me-3 pagination-text">
          {t('carriera.proposte_di_tesi.showing')} {totalPages === 0 ? 0 : startIndex}{' '}
          {t('carriera.proposte_di_tesi.to')}{' '}
          {currentPage * proposalsPerPage > count ? count : currentPage * proposalsPerPage}{' '}
          {t('carriera.proposte_di_tesi.of')} {count}
        </span>
      </div>
      <div className="pagination-controls">
        {totalPages > 0 && (
          <Pagination onChange={handlePageChange} style={{ margin: '0' }} size="sm">
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            {pageNumbers.map(number => (
              <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
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
