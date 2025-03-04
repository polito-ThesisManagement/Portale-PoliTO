import React, { useEffect, useState } from 'react';

import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import '../styles/searchbar.css';

export default function Searchbar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const { t, i18n } = useTranslation();

  const searchUrl =
    i18n.language === 'it'
      ? `https://www.polito.it/cerca?q=${searchWord}`
      : `https://www.polito.it/en/search?q=${searchWord}`;

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
    <Form
      className={props.mobile ? 'd-flex mt-2 mb-4' : 'custom-searchbar me-3 d-flex w-100 d-none d-sm-block d-block'}
      style={
        props.mobile
          ? { maxWidth: 'none', position: 'relative', marginLeft: '6px' }
          : { maxWidth: '400px', position: 'relative' }
      }
    >
      <InputGroup className="flex-nowrap w-100 me-3">
        <Form.Control
          className="truncated"
          type="search"
          placeholder={t('navbar.ricerca_nel_portale')}
          aria-label="Search"
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            height: '40px',
            backgroundColor: 'var(--background)',
            color: 'var(--primary)',
            borderRadius: 'var(--border-radius-button)',
            borderColor: 'var(--border-color)',
          }}
          value={searchWord}
          onChange={handleChange}
        />
        <i className="fa-solid fa-magnifying-glass search-icon" />
      </InputGroup>
      {searchWord !== '' && (
        <ListGroup
          className="custom-list-group"
          style={props.mobile ? { width: 'calc(100% - 15px)', marginTop: '40px' } : { width: '100%' }}
        >
          {filteredData.slice(0, 3).map(service => (
            <ListGroup.Item
              className="medium-weight custom-list-group-item"
              action
              as={Link}
              to={service.link}
              key={service.id}
              variant="light"
              onClick={() => {
                if (props.mobile) {
                  props.handleClose();
                }
                setFilteredData([]);
                setSearchWord('');
              }}
            >
              {service.pageName}
            </ListGroup.Item>
          ))}
          <ListGroup.Item
            className="custom-list-group-item"
            action
            as={Link}
            to={searchUrl}
            target="_blank"
            variant="light"
            onClick={() => {
              setSearchWord('');
            }}
          >
            {t('navbar.cerca')} <span className="medium-weight">{searchWord}</span> {t('navbar.su_polito')}
          </ListGroup.Item>
        </ListGroup>
      )}
    </Form>
  );
}

Searchbar.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pageName: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  mobile: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
};
