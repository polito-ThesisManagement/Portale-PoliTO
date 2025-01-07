import React, { useContext, useEffect, useState } from 'react';

import { Accordion } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { FaKey, FaUser } from 'react-icons/fa';
import { FaFilter, FaTags } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';

import API from '../API';
import { ThemeContext } from '../App';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import { getSystemTheme } from '../utils/utils';
import Badge from './Badge';
import FilterDropdown from './FilterDropdown';
import FilterGroup from './FilterGroup';
import LoadingModal from './LoadingModal';
import PaginationItem from './PaginationItem';
import ProposalsNotFound from './ProposalsNotFound';
import ResetButton from './ResetButton';
import SortDropdown from './SortDropdown';
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
          <Accordion activeKey={accordionOpen ? '0' : null} onSelect={() => setAccordionOpen(!accordionOpen)}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="accordion-title">
                  <FaFilter className="me-2" /> {t('carriera.proposte_di_tesi.filter')}
                  {(filters.isInternal != 0 ||
                    filters.isAbroad ||
                    filters.keyword.length > 0 ||
                    filters.type.length > 0 ||
                    filters.teacher.length > 0) && (
                    <span
                      style={{
                        backgroundColor: 'var(--secondary-600)',
                        color: 'var(--white)',
                        borderRadius: '50rem',
                        padding: '0.2rem 0.5rem',
                        marginLeft: '0.5rem',
                        marginRight: '0.5rem',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 'var(--font-weight-regular)',
                      }}
                    >
                      {filters.keyword.length +
                        filters.type.length +
                        filters.teacher.length +
                        (filters.isInternal != 0 ? 1 : 0) +
                        (filters.isAbroad ? 1 : 0)}
                    </span>
                  )}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="filters-section">
                  <FilterGroup
                    key={`${filters.isInternal}-${filters.isAbroad}`}
                    isAbroad={filters.isAbroad}
                    isInternal={filters.isInternal}
                    handleCheckChange={value => applyFilters('isAbroad', value)}
                    handleRadioChange={value => applyFilters('isInternal', value)}
                  />
                  <FilterDropdown
                    api={API.getThesisProposalsTypes}
                    filters={filters.type}
                    icon={<FaTags style={{ width: '20px' }} />}
                    itemType={'type'}
                    onApplyFilters={applyFilters}
                    onResetFilters={() => applyFilters('type', [])}
                    selectedItems={filters.type}
                  />
                  <FilterDropdown
                    api={API.getThesisProposalsKeywords}
                    filters={filters.keyword}
                    icon={<FaKey style={{ width: '20px' }} />}
                    itemType={'keyword'}
                    onApplyFilters={applyFilters}
                    onResetFilters={() => applyFilters('keyword', [])}
                    selectedItems={filters.keyword}
                  />
                  <FilterDropdown
                    api={API.getThesisProposalsTeachers}
                    filters={filters.teacher}
                    icon={<FaUser style={{ width: '20px' }} />}
                    itemType={'teacher'}
                    onApplyFilters={applyFilters}
                    onResetFilters={() => applyFilters('teacher', [])}
                    selectedItems={filters.teacher}
                  />
                  <SortDropdown
                    sortFields={sortFields}
                    sorting={sorting}
                    onApplySorting={applySorting}
                    onResetSorting={onResetSorting}
                  />
                </div>
                <hr className={`hr-${appliedTheme}`} />
                <div className="applied-filters-container">
                  <div className="badge-group">
                    {(filters.isInternal != 0 ||
                      filters.isAbroad ||
                      filters.keyword.length > 0 ||
                      filters.teacher.length > 0 ||
                      filters.type.length > 0) && (
                      <span className="applied-filters-label">{t('carriera.proposte_di_tesi.applied_filters')}</span>
                    )}
                    {filters.isInternal === 1 && <Badge variant="internal" type="reset" applyFilters={applyFilters} />}
                    {filters.isInternal === 2 && <Badge variant="external" type="reset" applyFilters={applyFilters} />}
                    {filters.isAbroad && <Badge variant="abroad" type="reset" applyFilters={applyFilters} />}
                    {filters.type.map(type => (
                      <Badge
                        key={type.id}
                        variant="type"
                        content={type}
                        type="reset"
                        filters={filters}
                        applyFilters={applyFilters}
                      />
                    ))}
                    {filters.keyword.map(keyword => (
                      <Badge
                        key={keyword.id}
                        variant="keyword"
                        content={keyword}
                        type="reset"
                        filters={filters}
                        applyFilters={applyFilters}
                      />
                    ))}
                    {filters.teacher.map(teacher => (
                      <Badge
                        key={teacher.id}
                        variant="teacher"
                        content={teacher}
                        type="reset"
                        filters={filters}
                        applyFilters={applyFilters}
                      />
                    ))}
                  </div>
                  <div className="reset-button-container">
                    <ResetButton
                      resetFilters={() => {
                        setFilters({ isAbroad: false, isInternal: 0, keyword: [], teacher: [], type: [] });
                      }}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
