import React, { useEffect, useState } from 'react';

import { Pagination } from 'react-bootstrap';
import { Search, SortDown, SortUp } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { HiLightBulb } from 'react-icons/hi';
import Select from 'react-select';

import PropTypes from 'prop-types';

import '../styles/Searchbar.css';
import '../styles/Theme.css';
import '../styles/Utilities.css';
import { ThesisItem } from './ThesisItem';
import Title from './Title';

export default function ThesisProposals({ thesisProposals }) {
  const [tab, setTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('asc');
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [filteredProposals, setFilteredProposals] = useState(thesisProposals);
  const [totalPages, setTotalPages] = useState(Math.ceil(thesisProposals.length / proposalsPerPage));
  const [thesisTypes, setThesisTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const { t } = useTranslation();

  const optionsPage = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
  ];

  const handlePageChange = pageNumber => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProposalsPerPageChange = event => {
    setProposalsPerPage(Number(event.value));
    setCurrentPage(1); // Reset to first page when changing proposals per page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortByChange = event => {
    setSortBy(event.target.value);
  };

  const handleOrderByChange = () => {
    if (sortBy !== '' && orderBy === 'asc') {
      setOrderBy('desc');
    }
    if (sortBy !== '' && orderBy === 'desc') {
      setOrderBy('asc');
    }
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
    setPageProposals(sortedProposals.slice(0, proposalsPerPage));
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

  // Set page numbers
  useEffect(() => {
    setTotalPages(Math.ceil(filteredProposals.length / proposalsPerPage));
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
    setPageProposals(filteredProposals.slice((currentPage - 1) * proposalsPerPage, currentPage * proposalsPerPage));
  }, [currentPage, totalPages, proposalsPerPage, filteredProposals]);

  return (
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
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '8px',
                }}
              >
                {/*<Tabs
                  defaultActiveKey="all"
                  activeKey={tab}
                  onSelect={k => setTab(k)}
                  id="thesis-proposals-tabs"
                  className="custom-tab"
                  fill={true}
                >
                  <Tab
                    style={{
                      backgroundColor: 'var(--background)',
                      color: 'var(--text)',
                    }}
                    eventKey="all"
                    title={t('carriera.proposte_di_tesi.all_thesis')}
                  />
                  <Tab eventKey="course" title={t('carriera.proposte_di_tesi.course_thesis')} />
                </Tabs>*/}
                <TextToggle tab={tab} setTab={setTab} />
                <Form className="d-flex me-3 w-100" style={{ maxWidth: '220px' }} onSubmit={e => e.preventDefault()}>
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
                      onChange={handleSortByChange}
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
                        onClick={handleOrderByChange}
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
                        onClick={handleOrderByChange}
                        disabled={sortBy === ''}
                      />
                    )}
                  </InputGroup>
                </Form>
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
                        borderRadius: '8px',
                      }}
                      value={searchQuery}
                      onChange={handleSearchbarChange}
                    />
                    <Search
                      style={{
                        position: 'absolute',
                        zIndex: '3',
                        right: '13px',
                        top: '7px',
                        color: 'var(--primary)',
                        height: '1.1rem',
                      }}
                    />
                  </InputGroup>
                </Form>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '8px',
                }}
              >
                <InputGroup className="flex-nowrap w-100">
                  <Form.Select
                    style={{
                      height: '2.6rem',
                      backgroundColor: 'var(--background)',
                      color: 'var(--primary)',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-family)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: '600',
                      width: '220px',
                    }}
                    value={selectedType}
                    onChange={handleSelectedType}
                  >
                    <option value="">Tutte le tipologie</option>
                    {thesisTypes.map((thesisType, index) => {
                      return (
                        <option key={index} value={thesisType}>
                          {thesisType}
                        </option>
                      );
                    })}
                  </Form.Select>
                </InputGroup>
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
            <div style={{ display: 'flex', alignItems: 'center', width: '300px', justifyContent: 'flex-start' }}>
              {/*<Form className="d-flex me-3 w-100">
                <InputGroup className="flex-nowrap w-100">
                  <Form.Select
                    label="page_elements"
                    style={{
                      height: '2.6rem',
                      backgroundColor: 'var(--background)',
                      color: 'var(--primary)',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-family)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: '600',
                    }}
                    value={proposalsPerPage}
                    onChange={handleProposalsPerPageChange}
                    onSubmit={e => e.preventDefault()}
                    aria-label={t('carriera.proposte_di_tesi.elements_per_page')}
                  >
                    <option value={5}> {t('carriera.proposte_di_tesi.elements_per_page') + ': 5'}</option>
                    <option value={10}> {t('carriera.proposte_di_tesi.elements_per_page') + ': 10'}</option>
                    <option value={20}> {t('carriera.proposte_di_tesi.elements_per_page') + ': 20'}</option>
                    <option value={50}> {t('carriera.proposte_di_tesi.elements_per_page') + ': 50'}</option>
                  </Form.Select>
                </InputGroup>
              </Form>*/}
              <Select
                options={optionsPage}
                value={proposalsPerPage}
                onChange={handleProposalsPerPageChange}
                placeholder={t('carriera.proposte_di_tesi.elements_per_page') + ': ' + proposalsPerPage}
                defaultInputValue={'5'}
              />
            </div>
            {!!totalPages && (
              <Pagination activeKey={currentPage} onChange={handlePageChange}>
                <Pagination.First />
                <Pagination.Prev />
                {pageNumbers.map(number => {
                  return <Pagination.Item key={number}>{number}</Pagination.Item>;
                })}
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            )}
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text)',
                fontWeight: '600',
                paddingRight: '2rem',
              }}
            >
              {t('carriera.proposte_di_tesi.total')} {filteredProposals.length}
            </span>
          </div>
        </main>
      </div>
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
            name="radio"
            style={{ display: 'none' }}
            checked={tab === 'all'}
            onChange={() => setTab('all')}
          />
          <label htmlFor="text-toggle-radio1">{t('carriera.proposte_di_tesi.all_thesis')}</label>
          <input
            type="radio"
            id="text-toggle-radio2"
            name="radio"
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

TextToggle.propTypes = {
  tab: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
};
