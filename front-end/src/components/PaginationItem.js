import React from 'react';

import { Form, InputGroup, Pagination } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

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
  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span style={{ color: 'var(--text)' }}> {t('carriera.proposte_di_tesi.per_page')} </span>
        <Form className="d-flex me-3 w-100" style={{ maxWidth: '85px' }}>
          <InputGroup className="flex-nowrap w-100">
            <Form.Select
              label="page_elements"
              style={{
                height: '2.4rem',
                color: 'var(--text)',
                backgroundColor: 'var(--surface)',
                borderRadius: '8px',
                lineHeight: '1rem',
                marginLeft: '1rem',
                fontFamily: 'var(--font-family)',
              }}
              value={proposalsPerPage}
              onChange={handleProposalsPerPageChange}
              onSubmit={e => e.preventDefault()}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Form.Select>
          </InputGroup>
        </Form>
        <span style={{ color: 'var(--text)' }}>
          {t('carriera.proposte_di_tesi.showing')}{' '}
          {totalPages === 0 ? 0 : currentPage === 1 ? 1 : (currentPage - 1) * proposalsPerPage + 1}{' '}
          {t('carriera.proposte_di_tesi.to')}{' '}
          {currentPage * proposalsPerPage > count ? count : currentPage * proposalsPerPage}{' '}
          {t('carriera.proposte_di_tesi.of')} {count}
        </span>
      </div>
      <div className="pagination-controls">
        {totalPages.length > 0 && (
          <Pagination activeKey={currentPage} onChange={handlePageChange} style={{ margin: '0' }}>
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1 ? true : false} />
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 ? true : false}
            />
            {pageNumbers.map(number => (
              <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages ? true : false}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages ? true : false}
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
