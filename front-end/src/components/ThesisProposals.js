import React, { useEffect, useState } from 'react';

import { Accordion } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { FaKey, FaUser } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';

import API from '../API';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import FilterComponent from './FilterComponent';
import LoadingModal from './LoadingModal';
import PaginationItem from './PaginationItem';
import ProposalsNotFound from './ProposalsNotFound';
import SortBy from './SortBy';
import { ThesisItem } from './ThesisItem';
import ThesisProposalsToggle from './ThesisProposalsToggle';
import Title from './Title';

export default function ThesisProposals() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [filters, setFilters] = useState({ keyword: [], teacher: [], type: [] });
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState('course');
  const [totalPages, setTotalPages] = useState(0);
  const [sorting, setSorting] = useState({ field: 'id', order: 'ASC' });
  const [searching, setSearching] = useState(false);

  const sortFields = ['id', 'topic', 'creationDate', 'expirationDate'];

  const { t, i18n } = useTranslation();

  const applyFilters = (itemType, selectedItems) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [itemType]: selectedItems,
    }));
    setCurrentPage(1); // Reset to first page when applying filters
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

  function useDebounceSearch(callback, delay) {
    const [timeoutId, setTimeoutId] = useState(null);

    const debounce = (...args) => {
      // Se esiste un timeout attivo, lo cancelliamo
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Creiamo un nuovo timeout che invoca la callback
      const newTimeoutId = setTimeout(() => {
        callback(...args);
      }, delay);

      // Salviamo il nuovo timeoutId
      setTimeoutId(newTimeoutId);
    };

    return debounce;
  }

  const debounceSearch = useDebounceSearch(() => {
    setSearching(true);
  }, 500); // 500ms per il debounce

  const handleSearchbarChange = event => {
    const value = event.target.value;
    setSearchQuery(value);

    // Avvia il debouncing solo quando l'utente smette di scrivere
    debounceSearch(value);
  };

  const handleTabChange = newTab => {
    setIsAnimating(true);
    setTab(newTab);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const applySorting = (selectedItem, sorting) => {
    setSorting(selectedItem !== sorting ? selectedItem : sorting);
  };

  const onResetSorting = () => {
    setSorting({ field: 'id', order: 'ASC' });
  };

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [proposalsPerPage]);

  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();
    if (tab === 'course') {
      console.log(sorting);
      API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage, filters, sorting, searchQuery)
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => {
          setLoading(false);
          setSearching(false);
        });
    } else {
      API.getThesisProposals(i18n.language, currentPage, proposalsPerPage, filters, sorting, searchQuery)
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(500 - elapsedTime, 0);

          setTimeout(() => {
            setLoading(false);
            setSearching(false);
          }, remainingTime);
        });
    }
  }, [i18n.language, currentPage, proposalsPerPage, filters, sorting, searching]);

  useEffect(() => {
    setTotalPages(Math.ceil(count / proposalsPerPage));
    const generatePageNumbers = () => {
      const pages = [];
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          pages.push(1, 2, 3, 4);
        } else if (currentPage > totalPages - 3) {
          pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1);
        }
      }
      return pages;
    };
    setPageNumbers(generatePageNumbers());
  }, [currentPage, totalPages, proposalsPerPage]);

  useEffect(() => {
    if (!isAnimating) {
      setLoading(true);
      const startTime = Date.now();
      const fetchProposals = async () => {
        try {
          if (tab === 'course') {
            const data = await API.getTargetedThesisProposals(
              i18n.language,
              currentPage,
              proposalsPerPage,
              filters,
              sorting,
            );
            setPageProposals(data.thesisProposals);
            setCount(data.count);
            setTotalPages(data.totalPages);
          } else {
            const data = await API.getThesisProposals(i18n.language, currentPage, proposalsPerPage, filters, sorting);
            setPageProposals(data.thesisProposals);
            setCount(data.count);
            setTotalPages(data.totalPages);
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
      <>
        <Title icon={<HiLightBulb size={28} />} sectionName={t('carriera.proposte_di_tesi.title')} />
        <div className="proposals-container">
          <main className="proposals-main">
            <section>
              <div className="filters-container">
                <div className="simple-filters-container">
                  <ThesisProposalsToggle tab={tab} handleTabChange={handleTabChange} />
                  <Form className="d-flex w-100" style={{ maxWidth: '300px' }} onSubmit={e => e.preventDefault()}>
                    <InputGroup className="flex-nowrap w-100">
                      <Form.Control
                        className="truncated"
                        type="search"
                        placeholder={t('carriera.proposte_di_tesi.search')}
                        aria-label="search_proposals"
                        style={{
                          height: '38px',
                          backgroundColor: 'var(--background)',
                          color: 'var(--primary)',
                          borderRadius: '10px',
                        }}
                        value={searchQuery}
                        onChange={handleSearchbarChange}
                      />
                      <Search className="search-icon" />
                    </InputGroup>
                  </Form>
                </div>
                <Accordion activeKey={accordionOpen ? '0' : null} onSelect={() => setAccordionOpen(!accordionOpen)}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="accordion-title">
                        <FaFilter /> {t('carriera.proposte_di_tesi.filter')}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="filters-section">
                        <FilterComponent
                          api={API.getThesisProposalsKeywords}
                          filters={filters.keyword}
                          icon={<FaKey style={{ width: '20px' }} />}
                          itemType={'keyword'}
                          onApplyFilters={applyFilters}
                          onResetFilters={() => applyFilters('keyword', [])}
                          selectedItems={filters.keyword}
                        />
                        <FilterComponent
                          api={API.getThesisProposalsTeachers}
                          filters={filters.teacher}
                          icon={<FaUser style={{ width: '20px' }} />}
                          itemType={'teacher'}
                          onApplyFilters={applyFilters}
                          onResetFilters={() => applyFilters('teacher', [])}
                          selectedItems={filters.teacher}
                        />
                        <FilterComponent
                          api={API.getThesisProposalsTypes}
                          filters={filters.type}
                          icon={<></>}
                          itemType={'type'}
                          onApplyFilters={applyFilters}
                          onResetFilters={() => applyFilters('type', [])}
                          selectedItems={filters.type}
                        />
                        <SortBy
                          sortFields={sortFields}
                          sorting={sorting}
                          onApplySorting={applySorting}
                          onResetSorting={onResetSorting}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </section>
            {loading ? (
              <LoadingModal show={loading} onHide={() => setLoading(false)} />
            ) : (
              <>
                {pageProposals.length > 0 ? (
                  <>
                    <section className="list-section">
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
                  </>
                ) : (
                  <ProposalsNotFound
                    resetFilters={() => {
                      setFilters({ keyword: [], teacher: [], type: [] });
                      setSearchQuery('');
                    }}
                  />
                )}
              </>
            )}
          </main>
        </div>
      </>
    </>
  );
}
