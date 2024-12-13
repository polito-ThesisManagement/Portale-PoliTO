import React, { useEffect, useState } from 'react';

import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { HiLightBulb } from 'react-icons/hi';

import PropTypes from 'prop-types';

import API from '../API';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/Utilities.css';
import FilterComponents from './FilterComponents';
import LoadingModal from './LoadingModal';
import PaginationItem from './PaginationItem';
import { ThesisItem } from './ThesisItem';
import ThesisProposalsToggle from './ThesisProposalsToggle';
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
                    <ThesisProposalsToggle tab={tab} handleTabChange={handleTabChange} />
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
                  <FilterComponents />
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
              <PaginationItem
                count={count}
                currentPage={currentPage}
                handleProposalsPerPageChange={handleProposalsPerPageChange}
                handlePageChange={handlePageChange}
                pageNumbers={pageNumbers}
                proposalsPerPage={proposalsPerPage}
                totalPages={totalPages}
              />
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
