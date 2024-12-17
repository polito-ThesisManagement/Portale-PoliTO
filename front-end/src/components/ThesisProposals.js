import React, { useEffect, useState } from 'react';

import { Accordion, Button, Container } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { FaKey, FaUser } from 'react-icons/fa';
import { FaFilter, FaRectangleXmark } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import API from '../API';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import FilterComponent from './FilterComponent';
import FilterDropdown from './FilterDropdown';
import MyDropdown from './GenericDropdown';
import LoadingModal from './LoadingModal';
import PaginationItem from './PaginationItem';
import { ThesisItem } from './ThesisItem';
import ThesisProposalsToggle from './ThesisProposalsToggle';
import Title from './Title';

export default function ThesisProposals() {
  const [filters, setFilters] = useState({ keyword: [], teacher: [], type: [] });
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState('asc');
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [thesisTypes, setThesisTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [tab, setTab] = useState('course');
  const [totalPages, setTotalPages] = useState(0);

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

  const handleSearchbarChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSelectedType = event => {
    console.log(event);
    if (event.target.value === t('carriera.proposte_di_tesi.internal_thesis')) {
      setSelectedType('internal');
    } else if (event.target.value === t('carriera.proposte_di_tesi.abroad_thesis')) {
      setSelectedType('abroad');
    } else if (event.target.value === t('carriera.proposte_di_tesi.external_thesis')) {
      setSelectedType('external');
    }
  };

  const handleTabChange = newTab => {
    setIsAnimating(true);
    setTab(newTab);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [proposalsPerPage]);

  useEffect(() => {
    if (sortBy !== '' && orderBy === 'asc') {
      setOrderBy('desc');
    }
    if (sortBy !== '' && orderBy === 'desc') {
      setOrderBy('asc');
    }
  }, [orderBy]);

  useEffect(() => {
    const types = [
      t('carriera.proposte_di_tesi.internal_thesis'),
      t('carriera.proposte_di_tesi.abroad_thesis'),
      t('carriera.proposte_di_tesi.external_thesis'),
    ];
    setThesisTypes(types);
  }, [thesisTypes]);

  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();
    if (tab === 'course') {
      API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage, filters)
        .then(data => {
          setPageProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => setLoading(false));
    } else {
      API.getThesisProposals(i18n.language, currentPage, proposalsPerPage, filters)
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
  }, [i18n.language, currentPage, proposalsPerPage, filters]);

  useEffect(() => {
    setTotalPages(totalPages);
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
      ) : count > 0 ? (
        <>
          <Title icon={<HiLightBulb size={28} />} sectionName={t('carriera.proposte_di_tesi.title')} />
          <div className="proposals-container">
            <main className="proposals-main">
              <section>
                <div className="filter-container">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item>
                      <Accordion.Header>
                        <div className="accordion-title">
                          <FaFilter /> {t('carriera.proposte_di_tesi.filter')}
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filter-section">
                          <ThesisProposalsToggle tab={tab} handleTabChange={handleTabChange} />
                          <FilterDropdown
                            title={t('carriera.proposte_di_tesi.order_by')}
                            options={[
                              t('carriera.proposte_di_tesi.created_order'),
                              t('carriera.proposte_di_tesi.exp_order'),
                            ]}
                            selectedOption={sortBy}
                            setSelectedOption={setSortBy}
                            orderBy={orderBy}
                            setOrderBy={setOrderBy}
                          />
                          <MyDropdown
                            title={t('carriera.proposte_di_tesi.type_filter')}
                            options={thesisTypes}
                            selectedOption={selectedType}
                            setSelectedOption={handleSelectedType}
                          />
                          <Form
                            className="d-flex w-100"
                            style={{ maxWidth: '300px' }}
                            onSubmit={e => e.preventDefault()}
                          >
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
                              <Search className="search-icon" />
                            </InputGroup>
                          </Form>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
