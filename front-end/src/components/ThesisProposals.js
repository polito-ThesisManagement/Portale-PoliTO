import React, { useEffect, useState } from 'react';

import { Accordion, Button, Container, Pagination } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { FaFilter, FaKey, FaUser } from 'react-icons/fa';
import { FaRectangleXmark, FaSort } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import API from '../API';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import FilterComponent from './FilterComponent';
import GenericDropdown from './GenericDropdown';
import LoadingModal from './LoadingModal';
import SortBy from './SortBy';
import { ThesisItem } from './ThesisItem';
import ThesisProposalsToggle from './ThesisProposalsToggle';
import Title from './Title';

export default function ThesisProposals() {
  const [filters, setFilters] = useState({ keyword: [], teacher: [], type: [] });
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState({ order: 'asc', sort: 'id' });
  const [tab, setTab] = useState('course');
  const [totalPages, setTotalPages] = useState(0);
  const { t, i18n } = useTranslation();

  const elementsPerPage = [5, 10, 20, 50];
  const sortFields = ['creationDate', 'expirationDate', 'topic', 'description', 'id'];
  const orderBy = ['asc', 'desc'];

  const handleTabChange = newTab => {
    setIsAnimating(true);
    setTab(newTab);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePageChange = pageNumber => {
    return () => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
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

  const applyFilters = (itemType, selectedItems) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [itemType]: selectedItems,
    }));
    setCurrentPage(1); // Reset to first page when applying filters
  };

  const applySorting = ({ sort, order }) => {
    setSorting({ order: order, sort: sort });
    setCurrentPage(1); // Reset to first page when applying sorting
  };

  const resetSorting = () => {
    setSorting({ order: 'asc', selectedItem: '' });
    setCurrentPage(1); // Reset to first page when resetting sorting
  };

  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();
    if (tab === 'course') {
      API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage, filters, sorting)
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => setLoading(false));
    } else {
      API.getThesisProposals(i18n.language, currentPage, proposalsPerPage, filters, sorting)
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
          }, remainingTime);
        });
    }
  }, [i18n.language, currentPage, proposalsPerPage, filters, sorting]);

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
            const data = await API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage, filters);
            setPageProposals(data.thesisProposals);
            setCount(data.count);
            setTotalPages(data.totalPages);
          } else {
            const data = await API.getThesisProposals(i18n.language, currentPage, proposalsPerPage, filters);
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
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : pageProposals.length > 0 ? (
        <>
          <Title icon={<HiLightBulb size={28} />} sectionName={t('carriera.proposte_di_tesi.title')} />
          <div className="proposals-container">
            <main className="proposals-main">
              <section>
                <div className="filter-container">
                  <div className="filter-section" style={{ paddingBottom: '1.5rem' }}>
                    <ThesisProposalsToggle tab={tab} handleTabChange={handleTabChange} />
                    <SortBy
                      sortFields={sortFields}
                      orderByFields={orderBy}
                      icon={<FaSort />}
                      sorting={sorting}
                      onApplySorting={applySorting}
                      onResetSorting={resetSorting}
                    />
                    <Form className="d-flex w-100" style={{ maxWidth: '250px' }} onSubmit={e => e.preventDefault()}>
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
                            borderRadius: '3px',
                            border: '1px solid var(--primary)',
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--font-size-sm)',
                          }}
                          value={searchQuery}
                          onChange={handleSearchbarChange}
                        />
                        <Search className="search-icon" />
                      </InputGroup>
                    </Form>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item>
                      <Accordion.Header>
                        <div className="accordion-title">
                          <FaFilter /> {t('carriera.proposte_di_tesi.filter')}
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filter-section">
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
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </section>
              <section className="list-section">
                <div>
                  {pageProposals.map(thesis => {
                    return <ThesisItem key={thesis.id} {...thesis} />;
                  })}
                </div>
              </section>
              <div className="list-footer">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <GenericDropdown
                    title={t('carriera.proposte_di_tesi.elements_per_page') + ':'}
                    options={elementsPerPage}
                    selectedOption={proposalsPerPage}
                    setSelectedOption={handleProposalsPerPageChange}
                  />
                </div>
                {totalPages > 0 && (
                  <Pagination active={currentPage}>
                    <Pagination.First onClick={handlePageChange(1)} />
                    <Pagination.Prev onClick={handlePageChange(currentPage - 1 > 0 ? currentPage - 1 : currentPage)} />
                    {pageNumbers.map(number => {
                      return (
                        <Pagination.Item
                          active={number === currentPage}
                          key={number}
                          label={number}
                          onClick={handlePageChange(number)}
                        >
                          {number}
                        </Pagination.Item>
                      );
                    })}
                    <Pagination.Next
                      onClick={handlePageChange(currentPage + 1 > totalPages ? totalPages : currentPage + 1)}
                    />
                    <Pagination.Last onClick={handlePageChange(totalPages)} />
                  </Pagination>
                )}
                <span className="total-count">
                  {t('carriera.proposte_di_tesi.total')} {count}
                </span>
              </div>
            </main>
          </div>
        </>
      ) : (
        <>
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em' }}>
            <div
              className="pol-headline pol-headline--with-bar"
              style={{ fontFamily: 'var(--font-primary)', color: 'var(--primary)' }}
            >
              <h3 className="bold-weight">{t('carriera.proposte_di_tesi.not_found')}</h3>
            </div>
            <FaRectangleXmark size={100} style={{ color: 'var(--primary)' }} strokeWidth={1} />
            <div className="mb-3" style={{ color: 'var(--text)' }}>
              <p> {t('carriera.proposte_di_tesi.message_not_found')} </p>
            </div>
            <div>
              <Link to="/">
                <Button className="card-button"> {t('page_not_found.back')} </Button>
              </Link>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
