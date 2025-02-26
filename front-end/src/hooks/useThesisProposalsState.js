import { useCallback, useEffect, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import API from '../API';
import useDebounce from './useDebounce';

const STORAGE_KEY = 'thesisProposalsState';

export default function useThesisProposalsState() {
  const { i18n } = useTranslation();

  const [count, setCount] = useState(0);
  const [pageProposals, setPageProposals] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [state, setState] = useState({
    currentPage: 1,
    filters: { isAbroad: 0, isInternal: 0, keyword: [], teacher: [], type: [] },
    proposalsPerPage: 10,
    searchQuery: '',
    sorting: { sortBy: 'id', orderBy: 'ASC' },
    tab: 'course',
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isResetting, setIsResetting] = useState(false);

  const debouncedSearchQuery = useDebounce(state.searchQuery, 500);

  useEffect(() => {
    const savedFilters = localStorage.getItem(STORAGE_KEY);
    if (savedFilters) {
      setState(JSON.parse(savedFilters));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state, isLoaded]);

  useEffect(() => {
    if (!isLoaded || isResetting) return;

    setLoading(true);
    const startTime = Date.now();

    const handleFetchCompletion = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);
      setTimeout(() => setLoading(false), remainingTime);
    };

    const fetchProposals = apiMethod => {
      apiMethod(
        i18n.language,
        state.currentPage,
        state.proposalsPerPage,
        state.filters,
        debouncedSearchQuery,
        state.sorting,
      )
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(handleFetchCompletion);
    };

    if (state.tab === 'course') {
      fetchProposals(API.getTargetedThesisProposals);
    } else {
      fetchProposals(API.getThesisProposals);
    }
  }, [
    i18n.language,
    isLoaded,
    state.currentPage,
    state.filters,
    state.proposalsPerPage,
    state.sorting,
    state.tab,
    debouncedSearchQuery,
    isResetting,
  ]);

  const applyFilters = useCallback((itemType, selectedItems) => {
    setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        [itemType]: selectedItems,
      },
      currentPage: 1,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setIsResetting(true);
    setState(prevState => ({
      ...prevState,
      currentPage: 1,
      filters: { isAbroad: 0, isInternal: 0, keyword: [], teacher: [], type: [] },
      searchQuery: '',
    }));
    setTimeout(() => {
      setIsResetting(false);
    }, 10);
  }, []);

  const applySorting = useCallback((newSorting, sorting) => {
    if (newSorting !== sorting) {
      setState(prevState => ({
        ...prevState,
        sorting: newSorting,
      }));
    }
  }, []);

  const handlePageChange = useCallback(
    pageNumber => {
      if (pageNumber !== state.currentPage) {
        setState(prevState => ({
          ...prevState,
          currentPage: pageNumber,
        }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [state.currentPage],
  );

  const handleProposalsPerPageChange = useCallback(event => {
    const value = parseInt(event.target.value, 10);
    setState(prevState => ({
      ...prevState,
      currentPage: 1,
      proposalsPerPage: value,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSearchbarChange = useCallback(event => {
    setState(prevState => ({
      ...prevState,
      searchQuery: event.target.value,
      currentPage: 1,
    }));
  }, []);

  const handleTabChange = useCallback(newTab => {
    setState(prevState => ({
      ...prevState,
      currentPage: 1,
      tab: newTab,
    }));
  }, []);

  const pageNumbers = useMemo(() => {
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
  }, [state.currentPage, totalPages]);

  return {
    count,
    pageProposals,
    pageNumbers,
    totalPages,
    state,
    loading,
    setLoading,
    applyFilters,
    applySorting,
    resetFilters,
    handlePageChange,
    handleProposalsPerPageChange,
    handleSearchbarChange,
    handleTabChange,
  };
}
