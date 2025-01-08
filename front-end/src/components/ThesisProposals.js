import React, { useContext, useEffect, useState } from 'react';

import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { HiLightBulb } from 'react-icons/hi';

import API from '../API';
import { ThemeContext } from '../App';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import { getSystemTheme } from '../utils/utils';
import FiltersAccordion from './FiltersAccordion';
import LoadingModal from './LoadingModal';
import PaginationItem from './PaginationItem';
import ProposalsNotFound from './ProposalsNotFound';
import { ThesisItem } from './ThesisItem';
import ThesisProposalsToggle from './ThesisProposalsToggle';
import Title from './Title';

export default function ThesisProposals() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [filters, setFilters] = useState({ isAbroad: false, isInternal: 0, keyword: [], teacher: [], type: [] });
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
  const [sorting, setSorting] = useState({ sortBy: 'id', orderBy: 'ASC' });
  const [searching, setSearching] = useState(false);

  const sortFields = ['topic', 'description', 'creationDate', 'expirationDate'];

  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

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
      // Clear the timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Create a new timeout that invokes the callback after the specified delay
      const newTimeoutId = setTimeout(() => {
        callback(...args);
      }, delay);

      // Save the timeoutId for cleanup
      setTimeoutId(newTimeoutId);
    };

    return debounce;
  }

  const debounceSearch = useDebounceSearch(() => {
    setSearching(true);
  }, 500); // 500ms of debounce

  const handleSearchbarChange = event => {
    const value = event.target.value;
    setSearchQuery(value);

    // Start the debounce only when the user stops typing
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
    setSorting({ sortBy: 'id', orderBy: 'ASC' });
  };

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [proposalsPerPage]);

  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();
    if (tab === 'course') {
      API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage, filters, searchQuery, sorting)
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
      API.getThesisProposals(i18n.language, currentPage, proposalsPerPage, filters, searchQuery, sorting)
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
      } else if (currentPage <= 3) {
        pages.push(1, 2, 3, 4);
      } else if (currentPage > totalPages - 3) {
        pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1);
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
              searchQuery,
              sorting,
            );
            setPageProposals(data.thesisProposals);
            setCount(data.count);
            setTotalPages(data.totalPages);
          } else {
            const data = await API.getThesisProposals(
              i18n.language,
              currentPage,
              proposalsPerPage,
              filters,
              searchQuery,
              sorting,
            );
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
      <Title icon={<HiLightBulb size={28} />} sectionName={t('carriera.proposte_di_tesi.title')} />
      <div className="proposals-container">
        <div className="filters-container">
          <div className="simple-filters-container">
            <ThesisProposalsToggle tab={tab} handleTabChange={handleTabChange} />
            <Form
              className="d-flex w-100"
              style={{ maxWidth: '380px', zIndex: '1' }}
              onSubmit={e => e.preventDefault()}
            >
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
          <FiltersAccordion
            accordionOpen={accordionOpen}
            setAccordionOpen={setAccordionOpen}
            filters={filters}
            setFilters={setFilters}
            applyFilters={applyFilters}
            sortFields={sortFields}
            sorting={sorting}
            applySorting={applySorting}
            onResetSorting={onResetSorting}
            appliedTheme={appliedTheme}
          />
        </div>
        {loading ? (
          <LoadingModal show={loading} onHide={() => setLoading(false)} />
        ) : (
          <>
            {pageProposals.length > 0 ? (
              <>
                <div className="list-section">
                  {pageProposals.map(thesis => {
                    return <ThesisItem key={thesis.id} {...thesis} filters={filters} applyFilters={applyFilters} />;
                  })}
                </div>
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
                  setFilters({ isAbroad: false, isInternal: 0, keyword: [], teacher: [], type: [] });
                  setSearchQuery('');
                }}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
