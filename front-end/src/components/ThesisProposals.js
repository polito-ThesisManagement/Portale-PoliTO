import React, { useEffect, useRef, useState } from 'react';

import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import API from '../API';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import FiltersAccordion from './FiltersAccordion';
import LoadingModal from './LoadingModal';
import PaginationItem from './PaginationItem';
import ProposalsNotFound from './ProposalsNotFound';
import SegmentedControl from './SegmentedControl';
import { ThesisItem } from './ThesisItem';

export default function ThesisProposals() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const [count, setCount] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [pageProposals, setPageProposals] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [state, setState] = useState({
    currentPage: 1,
    filters: { isAbroad: false, isInternal: 0, keyword: [], teacher: [], type: [] },
    proposalsPerPage: 5,
    searchQuery: '',
    sorting: { sortBy: 'id', orderBy: 'ASC' },
    tab: 'course',
  });

  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  const sortFields = ['topic', 'description', 'creationDate', 'expirationDate'];

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const applyFilters = (itemType, selectedItems) => {
    setState(prevState => {
      const newState = {
        ...prevState,
        filters: {
          ...prevState.filters,
          [itemType]: selectedItems,
        },
        currentPage: 1, // Reset to first page when filters change
      };
      return newState;
    });
  };

  const applySorting = (newSorting, sorting) => {
    if (newSorting !== sorting) {
      setState(prevState => ({
        ...prevState,
        sorting: newSorting,
      }));
    }
  };

  const debounceSearch = useDebounceSearch(() => {
    setSearching(true);
  }, 500); // 500ms of debounce

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 6) {
      // Case 1: Less than 6 pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (state.currentPage < 4) {
      // Case 2: You are in the first pages
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (state.currentPage >= totalPages - 2) {
      // Case 3: You are in the last pages
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      // Case 4: You are in the middle
      pages.push(1, '...', state.currentPage - 1, state.currentPage, state.currentPage + 1, '...', totalPages);
    }
    return pages;
  };

  const handlePageChange = pageNumber => {
    if (pageNumber !== state.currentPage) {
      setState(prevState => {
        const newState = {
          ...prevState,
          currentPage: pageNumber,
        };
        return newState;
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProposalsPerPageChange = event => {
    const value = parseInt(event.target.value, 10);
    setState(prevState => {
      const newState = {
        ...prevState,
        currentPage: 1,
        proposalsPerPage: value,
      };
      return newState;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchbarChange = event => {
    const value = event.target.value;
    setState(prevState => {
      const newState = {
        ...prevState,
        searchQuery: value,
        currentPage: 1,
      };
      return newState;
    });

    // Start the debounce only when the user stops typing
    debounceSearch(value);
  };

  const handleTabChange = newTab => {
    setState(prevState => {
      const newState = {
        ...prevState,
        currentPage: 1,
        tab: newTab,
      };
      return newState;
    });
  };

  const updateQueryParams = newState => {
    const defaultValues = {
      currentPage: 1,
      filters: { isAbroad: false, isInternal: 0, keyword: [], teacher: [], type: [] },
      proposalsPerPage: 5,
      searchQuery: '',
      sorting: { sortBy: 'id', orderBy: 'ASC' },
      tab: 'course',
    };

    const processArray = arr => (Array.isArray(arr) ? arr.map(item => item.id + '-' + item.content).join(',') : arr);

    const getQueryParam = (paramName, newValue, defaultValue) => {
      return newValue !== defaultValue ? newValue : undefined;
    };

    const getFilterQueryParams = (filters, defaultFilters) => {
      const filterQueryParams = {};

      Object.keys(filters).forEach(key => {
        const value = filters[key];
        if (value && value !== defaultFilters[key]) {
          filterQueryParams[key] = Array.isArray(value) && value.length ? processArray(value) : value;
        }
      });

      return filterQueryParams;
    };

    // Construct the queryParams object
    const queryParams = {};

    // Handle filters
    if (newState.filters) {
      Object.assign(queryParams, getFilterQueryParams(newState.filters, defaultValues.filters));
    }

    // Handle sorting
    if (newState.sorting) {
      if (newState.sorting.sortBy !== defaultValues.sorting.sortBy) queryParams.sortBy = newState.sorting.sortBy;
      if (newState.sorting.orderBy !== defaultValues.sorting.orderBy) queryParams.orderBy = newState.sorting.orderBy;
    }

    // Handle other fields (currentPage, searchQuery, etc.)
    queryParams.currentPage = getQueryParam('currentPage', newState.currentPage, defaultValues.currentPage);
    queryParams.searchQuery = getQueryParam('searchQuery', newState.searchQuery, defaultValues.searchQuery);
    queryParams.proposalsPerPage = getQueryParam(
      'proposalsPerPage',
      newState.proposalsPerPage,
      defaultValues.proposalsPerPage,
    );
    queryParams.tab = getQueryParam('tab', newState.tab, defaultValues.tab);

    // Remove undefined values
    const queryStringParams = queryString.stringify(queryParams, { skipNull: true, skipEmptyString: true });

    // Navigate with the updated query string
    navigate(`?${queryStringParams}`, { replace: true });
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

  const parseQueryParams = queryParams => {
    const parseArray = param => {
      return param
        ? param.split(',').map(item => {
            const id = parseInt(item.split('-')[0]);
            const content = item.split('-')[1];
            return { id, content };
          })
        : [];
    };

    return {
      currentPage: queryParams.currentPage ? parseInt(queryParams.currentPage, 10) : 1,
      filters: {
        isAbroad: queryParams.isAbroad === 'true',
        isInternal: queryParams.isInternal ? parseInt(queryParams.isInternal, 10) : 0,
        keyword: parseArray(queryParams.keyword),
        teacher: parseArray(queryParams.teacher),
        type: parseArray(queryParams.type),
      },
      proposalsPerPage: queryParams.proposalsPerPage ? parseInt(queryParams.proposalsPerPage, 10) : 5,
      searchQuery: queryParams.searchQuery || '',
      sorting: {
        sortBy: queryParams.sortBy || 'id',
        orderBy: queryParams.orderBy || 'ASC',
      },
      tab: queryParams.tab || 'course',
    };
  };

  const resetFilters = () => {
    setState(prevState => ({
      ...prevState,
      currentPage: 1,
      filters: { isAbroad: false, isInternal: 0, keyword: [], teacher: [], type: [] },
      searchQuery: '',
      sorting: { sortBy: 'id', orderBy: 'ASC' },
    }));
  };

  useEffect(() => {
    updateQueryParams(state);
  }, [state.currentPage, state.filters, state.proposalsPerPage, state.sorting, state.tab, searching]);

  useEffect(() => {
    const parsedQueryParams = queryString.parse(location.search);
    if (Object.keys(parsedQueryParams).length > 0) {
      setState(prevState => ({
        ...prevState,
        ...parseQueryParams(parsedQueryParams),
      }));
    }
  }, [location.search]);

  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();

    const handleFetchCompletion = startTime => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);
      scheduleLoadingStateUpdate(remainingTime);
    };

    const scheduleLoadingStateUpdate = remainingTime => {
      setTimeout(() => {
        setLoading(false);
        setSearching(false);
      }, remainingTime);
    };

    const fetchProposals = apiMethod => {
      apiMethod(
        i18n.language,
        state.currentPage,
        state.proposalsPerPage,
        state.filters,
        state.searchQuery,
        state.sorting,
      )
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => handleFetchCompletion(startTime));
    };

    if (state.tab === 'course') {
      fetchProposals(API.getTargetedThesisProposals);
    } else {
      fetchProposals(API.getThesisProposals);
    }
  }, [i18n.language, state.currentPage, state.filters, state.proposalsPerPage, state.sorting, state.tab, searching]);

  useEffect(() => {
    setPageNumbers(generatePageNumbers());
  }, [loading]);

  return (
    <div className="proposals-container">
      <div className="filters-container">
        <div className="simple-filters-container" key={state.tab}>
          <SegmentedControl
            name="proposals-segmented-control"
            callback={val => handleTabChange(val)}
            controlRef={useRef()}
            defaultIndex={state.tab === 'course' ? 0 : 1}
            segments={[
              {
                label: t('carriera.proposte_di_tesi.course_proposals'),
                value: 'course',
                ref: useRef(),
              },
              {
                label: t('carriera.proposte_di_tesi.all_proposals'),
                value: 'all',
                ref: useRef(),
              },
            ]}
          />
          <Form className="d-flex w-100" style={{ maxWidth: '380px', zIndex: '1' }} onSubmit={e => e.preventDefault()}>
            <InputGroup className="flex-nowrap w-100">
              <Form.Control
                className="truncated"
                type="search"
                placeholder={t('carriera.proposte_di_tesi.search')}
                aria-label="search_proposals"
                style={{
                  fontSize: 'var(--font-size-sm)',
                  height: '38px',
                  backgroundColor: 'var(--background)',
                  color: 'var(--primary)',
                  borderRadius: '10px',
                }}
                value={state.searchQuery}
                onChange={handleSearchbarChange}
              />
              <Search className="search-icon" />
            </InputGroup>
          </Form>
        </div>
        <FiltersAccordion
          accordionOpen={accordionOpen}
          setAccordionOpen={setAccordionOpen}
          filters={state.filters}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
          sortFields={sortFields}
          sorting={state.sorting}
          applySorting={applySorting}
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
                  return <ThesisItem key={thesis.id} {...thesis} />;
                })}
              </div>
              <PaginationItem
                count={count}
                currentPage={state.currentPage}
                handleProposalsPerPageChange={handleProposalsPerPageChange}
                handlePageChange={handlePageChange}
                pageNumbers={pageNumbers}
                proposalsPerPage={state.proposalsPerPage}
                totalPages={totalPages}
              />
            </>
          ) : (
            <ProposalsNotFound resetFilters={resetFilters} />
          )}
        </>
      )}
    </div>
  );
}
