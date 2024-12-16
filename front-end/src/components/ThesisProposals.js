import React, { useEffect, useState } from 'react';

import { Accordion, Button, Container, Pagination } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { FaFilter, FaRectangleXmark } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import API from '../API';
import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/ThesisProposals.css';
import '../styles/Utilities.css';
import FilterDropdown from './FilterDropdown';
import MyDropdown from './GenericDropdown';
import LoadingModal from './LoadingModal';
import { ThesisItem } from './ThesisItem';
import Title from './Title';

export default function ThesisProposals() {
  const [tab, setTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('asc');
  const [pageNumbers, setPageNumbers] = useState([]);
  const [filteredProposals, setFilteredProposals] = useState([]);
  const [thesisTypes, setThesisTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [thesisProposals, setThesisProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);

  const elementsPerPage = [5, 10, 20, 50];

  const { i18n } = useTranslation();

  useEffect(() => {
    setLoading(true);
    if (tab === 'all') {
      API.getThesisProposals(i18n.language, currentPage, proposalsPerPage) //fetch thesisProposals based on the current page and the number of proposals per page
        .then(data => {
          setThesisProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching thesis proposals:', error))
        .finally(() => setLoading(false));
    } else {
      API.getTargetedThesisProposals(i18n.language, currentPage, proposalsPerPage) //fetch thesisProposals based on the current page and the number of proposals per page
        .then(data => {
          setThesisProposals(data.thesisProposals);
          setCount(data.count);
          setTotalPages(data.totalPages);
        })
        .catch(error => console.error('Error fetching targeted thesis proposals:', error))
        .finally(() => setLoading(false));
    }
    if (totalPages > 5) {
      if (currentPage <= 3) {
        setPageNumbers([1, 2, 3, 4, 5]);
      } else if (currentPage >= totalPages - 2) {
        setPageNumbers([totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
      } else {
        setPageNumbers([currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]);
      }
    } else {
      setPageNumbers(Array.from({ length: totalPages }, (_, i) => i + 1));
    }
  }, [i18n.language, currentPage, proposalsPerPage, tab]);

  const { t } = useTranslation();

  const handlePageChange = pageNumber => {
    return () => {
      setCurrentPage(pageNumber);
      console.log(currentPage);
      console.log(pageNumber);
    };
  };

  const handleSearchbarChange = event => {
    setSearchQuery(event.target.value);
  };

  function sortingProposals(proposals) {
    const sortedProposals = [...proposals];
    if (orderBy === 'asc') {
      if (sortBy === 'creationDate') {
        sortedProposals.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));
      } else if (sortBy === 'expirationDate') {
        sortedProposals.sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate));
      }
    } else if (orderBy === 'desc') {
      if (sortBy === 'creationDate') {
        sortedProposals.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
      } else if (sortBy === 'expirationDate') {
        sortedProposals.sort((a, b) => new Date(b.expirationDate) - new Date(a.expirationDate));
      }
    }
    return sortedProposals;
  }

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
  }, []);

  // Filter proposals based on activeTab
  useEffect(() => {
    if (tab === 'all') {
      setFilteredProposals(filteredProposals);
    } else {
      const filtered = filteredProposals; // Add filter for thesis related to the logged student's degree course
      setFilteredProposals(sortingProposals(filtered));
    }
    setCurrentPage(1);
  }, [tab]);

  // Filter proposals based on search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProposals(thesisProposals);
      setCurrentPage(1);
      return;
    }
    const filtered = thesisProposals.filter(
      proposal =>
        proposal.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.keywords.some(keyword => keyword.keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proposal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.supervisor.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.supervisor.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.internalCoSupervisors.some(coSupervisor => {
          return (
            coSupervisor.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coSupervisor.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coSupervisor.firstName.concat(' ', coSupervisor.lastName).toLowerCase().includes(searchQuery.toLowerCase())
          );
        }),
    );
    setFilteredProposals(sortingProposals(filtered));
    setCurrentPage(1);
  }, [searchQuery]);

  // Sort the filtered proposals based on the selected sort option
  useEffect(() => {
    const sortedProposals = sortingProposals(filteredProposals);
    setFilteredProposals(sortedProposals);
  }, [sortBy, orderBy]);

  // Filter proposals based on selected type
  useEffect(() => {
    if (selectedType === '') {
      setFilteredProposals(thesisProposals);
      setCurrentPage(1);
      return;
    }
    const filtered = thesisProposals.filter(proposal => {
      if (selectedType === 'internal') {
        return proposal.isInternal;
      } else if (selectedType === 'abroad') {
        return proposal.isAbroad;
      } else if (selectedType === 'external') {
        return !proposal.isInternal;
      }
    });
    setFilteredProposals(sortingProposals(filtered));
    setCurrentPage(1);
  }, [selectedType]);

  return (
    <>
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : thesisProposals.length > 0 ? (
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
                          <TextToggle tab={tab} setTab={setTab} />
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
                            style={{ maxWidth: '250px' }}
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
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </section>
              <section className="list-section">
                <div>
                  {thesisProposals.map(thesis => {
                    return <ThesisItem key={thesis.id} {...thesis} />;
                  })}
                </div>
              </section>
              <div className="list-footer">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <MyDropdown
                    title={t('carriera.proposte_di_tesi.elements_per_page') + ':'}
                    options={elementsPerPage}
                    selectedOption={proposalsPerPage}
                    setSelectedOption={setProposalsPerPage}
                  />
                </div>
                {totalPages > 0 && (
                  <Pagination activeLabel={currentPage}>
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

function TextToggle({ tab, setTab }) {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="text-toggle-container">
        <div className="text-toggle">
          <input
            type="radio"
            id="text-toggle-radio1"
            name="radio-text-toggle"
            style={{ display: 'none' }}
            checked={tab === 'all'}
            onChange={() => setTab('all')}
          />
          <label htmlFor="text-toggle-radio1">{t('carriera.proposte_di_tesi.all_thesis')}</label>
          <input
            type="radio"
            id="text-toggle-radio2"
            name="radio-text-toggle"
            style={{ display: 'none' }}
            checked={tab === 'course'}
            onChange={() => setTab('course')}
          />
          <label htmlFor="text-toggle-radio2">{t('carriera.proposte_di_tesi.course_thesis')}</label>
        </div>
      </div>
    </div>
  );
}

TextToggle.propTypes = {
  tab: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
};
