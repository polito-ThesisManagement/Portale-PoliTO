import React, { useEffect, useState } from 'react';

import { Badge, Pagination } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { FaAngleDown, FaKey } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';

import PropTypes from 'prop-types';

import API from '../API';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import LoadingModal from './LoadingModal';
import { ThesisItem } from './ThesisItem';
import Title from './Title';

export default function ThesisProposals() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState('course');
  const [totalPages, setTotalPages] = useState(Math.ceil(count / proposalsPerPage));

  const { t, i18n } = useTranslation();

  const handleTabChange = newTab => {
    setIsAnimating(true);
    setTab(newTab);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePageChange = pageNumber => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProposalsPerPageChange = event => {
    const value = parseInt(event.target.value, 10);
    setProposalsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing proposals per page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchbarChange = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();
    if (tab === 'course') {
      API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage)
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.count / proposalsPerPage);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => setLoading(false));
    } else {
      API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage)
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.count / proposalsPerPage);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(500 - elapsedTime, 0);

          setTimeout(() => {
            setLoading(false);
          }, remainingTime);
        });
    }
  }, [i18n.language, currentPage, proposalsPerPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(count / proposalsPerPage));
    if (totalPages <= 5) {
      const array = [];
      for (let i = 1; i <= totalPages; i++) {
        array.push(i);
      }
      setPageNumbers(array);
    } else {
      if (currentPage <= 3) {
        setPageNumbers([1, 2, 3, 4, '...', totalPages]);
      } else if (currentPage > totalPages - 3) {
        setPageNumbers([1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
      } else {
        setPageNumbers([
          1,
          '...',
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          '...',
          totalPages,
        ]);
      }
    }
  }, [currentPage, totalPages, proposalsPerPage]);

  useEffect(() => {
    if (!isAnimating) {
      setLoading(true);
      const startTime = Date.now();
      const fetchProposals = async () => {
        try {
          if (tab === 'course') {
            const data = await API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage);
            setPageProposals(data.thesisProposals);
            setCount(data.count);
            setTotalPages(data.count / proposalsPerPage);
          } else {
            const data = await API.getThesisProposals(i18n.language, currentPage, proposalsPerPage);
            setPageProposals(data.thesisProposals);
            setCount(data.count);
            setTotalPages(data.count / proposalsPerPage);
          }
        } catch (error) {
          console.error('Error fetching thesis proposals:', error);
        } finally {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(500 - elapsedTime, 0);

          setTimeout(() => {
            setLoading(false);
          }, remainingTime);
        }
      };
      fetchProposals();
    }
  }, [tab, isAnimating]);

  return (
    <>
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : (
        <>
          <Title icon={<HiLightBulb size={28} />} sectionName={t('carriera.proposte_di_tesi.title')} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              paddingBottom: '5.675rem',
            }}
          >
            <main
              style={{
                borderRadius: '1rem',
                display: 'flex',
                backgroundColor: 'var(--surface)',
                width: '100%',
                flexDirection: 'column',
                flexGrow: '1',
                paddingBottom: '2%',
              }}
            >
              <section style={{ marginBottom: '0.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexGrow: '1',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    paddingTop: '1.75rem',
                    paddingBottom: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div className="proposals-toggle-container">
                        <div className={`proposals-toggle proposals-toggle-${tab}`}>
                          <label htmlFor="proposals-toggle-radio1">
                            {t('carriera.proposte_di_tesi.course_thesis')}
                          </label>
                          <input
                            type="radio"
                            id="proposals-toggle-radio1"
                            name="proposals-radio"
                            checked={tab === 'course'}
                            style={{ display: 'none' }}
                            onChange={() => handleTabChange('course')}
                          />
                          <label htmlFor="proposals-toggle-radio2">{t('carriera.proposte_di_tesi.all_thesis')}</label>
                          <input
                            type="radio"
                            id="proposals-toggle-radio2"
                            name="proposals-radio"
                            checked={tab === 'all'}
                            style={{ display: 'none' }}
                            onChange={() => handleTabChange('all')}
                          />
                        </div>
                      </div>
                    </div>
                    {/*
                    <Form
                      className="d-flex me-3 w-100"
                      style={{ maxWidth: '220px' }}
                      onSubmit={e => e.preventDefault()}
                    >
                      <InputGroup className="flex-nowrap w-100">
                        <Form.Select
                          label="order_by"
                          style={{
                            height: '2rem',
                            backgroundColor: 'var(--background)',
                            color: 'var(--primary)',
                            borderRadius: '8px',
                            lineHeight: '1rem',
                            paddingRight: '2rem',
                            fontFamily: 'var(--font-family)',
                            fontSize: 'var(--font-size-md)',
                          }}
                          value={sortBy}
                        >
                          <option value="" disabled={sortBy !== ''}>
                            {t('carriera.proposte_di_tesi.order_by')}
                          </option>
                          <option value="creationDate">{t('carriera.proposte_di_tesi.created_order')}</option>
                          <option value="expirationDate">{t('carriera.proposte_di_tesi.exp_order')}</option>
                        </Form.Select>
                        {orderBy === 'asc' ? (
                          <SortUp
                            style={{
                              color: 'var(--primary)',
                              height: '2.2rem',
                              width: '2.2rem',
                              cursor: 'pointer',
                              padding: '0 0.5rem',
                            }}
                            disabled={sortBy === ''}
                          />
                        ) : (
                          <SortDown
                            style={{
                              color: 'var(--primary)',
                              height: '2.2rem',
                              width: '2.2rem',
                              cursor: 'pointer',
                              padding: '0 0.5rem',
                            }}
                            disabled={sortBy === ''}
                          />
                        )}
                      </InputGroup>
                    </Form>
                    */}
                    <Form className="d-flex w-100" style={{ maxWidth: '300px' }} onSubmit={e => e.preventDefault()}>
                      <InputGroup className="flex-nowrap w-100">
                        <Form.Control
                          className="truncated"
                          type="search"
                          placeholder={t('carriera.proposte_di_tesi.search')}
                          aria-label="search_proposals"
                          style={{
                            height: '2rem',
                            backgroundColor: 'var(--background)',
                            color: 'var(--primary)',
                            borderRadius: '8px',
                          }}
                          value={searchQuery}
                          onChange={handleSearchbarChange}
                        />
                        <Search
                          style={{
                            position: 'absolute',
                            zIndex: '3',
                            right: '15',
                            top: '7',
                            color: 'var(--primary)',
                            height: '1.1rem',
                          }}
                        />
                      </InputGroup>
                    </Form>
                  </div>
                  <div>
                    <div
                      style={{
                        alignItems: 'center',
                        borderRadius: '0.375rem',
                        border: '0.0625rem solid var(--tag-border)',
                        backgroundColor: 'var(--tag-bg))',
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
                      <FaKey style={{ width: '20px' }} />
                      <span
                        style={{
                          margin: '0px 0.5rem',
                        }}
                      >
                        Keywords
                      </span>
                      <FaAngleDown strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </section>
              <section
                style={{
                  backgroundColor: 'var(--surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  paddingBottom: '6px',
                }}
              >
                <div>
                  {pageProposals.map(thesis => {
                    return <ThesisItem key={thesis.id} {...thesis} />;
                  })}
                </div>
              </section>
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
                      <Pagination.First
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1 ? true : false}
                      />
                      <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1 ? true : false}
                      />
                      {pageNumbers.map(number => (
                        <Pagination.Item
                          key={number}
                          active={number === currentPage}
                          onClick={() => handlePageChange(number)}
                        >
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
            </main>
          </div>
        </>
      )}
    </>
  );
}

ThesisProposals.propTypes = {
  thesisProposals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      supervisor: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
      internalCoSupervisors: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          firstName: PropTypes.string.isRequired,
          lastName: PropTypes.string.isRequired,
        }),
      ).isRequired,
      creationDate: PropTypes.string.isRequired,
      expirationDate: PropTypes.string.isRequired,
      isInternal: PropTypes.bool.isRequired,
      isAbroad: PropTypes.bool.isRequired,
      keywords: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          keyword: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};
