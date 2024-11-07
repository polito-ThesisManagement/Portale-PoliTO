import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { InputGroup } from 'react-bootstrap';

import { Search } from 'react-bootstrap-icons';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';

export default function Searchbar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const { t } = useTranslation();

  const handleChange = event => {
    const word = event.target.value;
    setSearchWord(word);

    const newFilter = props.services.filter(service => {
      return service.pageName.toLowerCase().includes(word.toLowerCase());
    });

    setFilteredData(newFilter);
  };

  const handleClickOutside = event => {
    const isSearchbar = event.target.closest('.w-100');
    if (!isSearchbar) {
      setSearchWord('');
      setFilteredData([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Form className="d-flex me-3 w-100" style={{ maxWidth: '400px' }}>
      <InputGroup className="flex-nowrap w-100">
        <Form.Control
          className="truncated"
          type="search"
          placeholder={t('navbar.ricerca_nel_portale')}
          aria-label="Search"
          size="md"
          style={{
            height: '40px',
            backgroundColor: 'var(--background-light)',
            color: 'var(--dark-navy)',
            borderRadius: '8px',
          }}
          value={searchWord}
          onChange={handleChange}
        />
        <Search
          style={{
            position: 'relative',
            zIndex: '3',
            right: '28',
            top: '12',
          }}
        />
      </InputGroup>
      {searchWord !== '' && (
        <ListGroup
          className="w-100"
          style={{
            position: 'absolute',
            maxWidth: '370px',
            marginTop: '40px',
          }}
        >
          {filteredData.slice(0, 3).map(service => (
            <ListGroup.Item
              action
              as={Link}
              to={service.link}
              key={service.id}
              variant="light"
              onClick={() => {
                setFilteredData([]);
                setSearchWord('');
              }}
              style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)' }}
            >
              {service.pageName}
            </ListGroup.Item>
          ))}
          <ListGroup.Item
            action
            as={Link}
            to={'https://www.polito.it/en/search?q=+' + searchWord + '&lang=it'}
            target="_blank"
            variant="light"
            onClick={() => {
              setSearchWord('');
            }}
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            Cerca <span style={{ fontWeight: 'var(--font-weight-medium)' }}>{searchWord}</span> su polito.it...
          </ListGroup.Item>
        </ListGroup>
      )}
    </Form>
  );
}
