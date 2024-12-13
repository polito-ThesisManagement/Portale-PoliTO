import React from 'react';

import { Badge, Form, InputGroup, Pagination } from 'react-bootstrap';
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        flexWrap: 'wrap',
        paddingBottom: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flex: 1 }}>
        <Form className="d-flex me-3 w-100" style={{ maxWidth: '80px' }}>
          <InputGroup className="flex-nowrap w-100">
            <Form.Select
              label="page_elements"
              style={{
                height: '2.4rem',
                backgroundColor: 'var(--background)',
                color: 'var(--primary)',
                borderRadius: '8px',
                lineHeight: '1rem',
                paddingRight: '2rem',
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
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
        {totalPages && (
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
        <Badge
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-base)',
            fontWeight: '400',
            color: 'var(--primary)',
            height: '2.4rem',
            backgroundColor: 'var(--background) !important',
            border: 'var(--bs-border-width) solid var(--bs-border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {t('carriera.proposte_di_tesi.total')} {count}
        </Badge>
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
