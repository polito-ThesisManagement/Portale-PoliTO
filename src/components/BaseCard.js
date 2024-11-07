import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Button, Col, Container } from 'react-bootstrap';

import { Star, StarFill } from 'react-bootstrap-icons';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { PiUserListFill } from 'react-icons/pi';

import { useTranslation } from 'react-i18next';

import { FavoritesContext } from '../App';
import '../styles/Card.css';

export default function BaseCard(props) {
  const { t } = useTranslation();

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [starClicked, setStarClicked] = useState(() => {
    const isStarred = localStorage.getItem(props.service) === 'true' && favorites.length > 0;
    return isStarred;
  });

  useEffect(() => {
    localStorage.setItem(props.service, starClicked.toString());
  }, [props.service, starClicked]);

  const handleStarClick = () => {
    setStarClicked(!starClicked);
    if (!starClicked) {
      const service = props.service;
      const path = props.servicePath;
      const obj = { service, path };
      console.log(obj);
      const favorite = JSON.stringify(obj);
      setFavorites([...favorites, favorite]);
    } else {
      setFavorites(favorites.filter(fav => JSON.parse(fav).service !== props.service));
    }
  };

  return (
    <Col sm={6} md={6} lg={6} xl={4} className="px-3 pb-3">
      <Container className="custom-card" style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span className="section-title col-10">
            {props.icon ? props.icon : <PiUserListFill size="48" className="card-icon" />}
            <span className="section-title position-relative" style={{ maxWidth: '170px' }}>
              {props.service}
            </span>
          </span>
          <div className="col d-flex justify-content-end">
            {starClicked ? (
              <StarFill
                size="24px"
                className="star"
                style={{ color: 'var(--medium-orange)' }}
                onClick={handleStarClick}
              />
            ) : (
              <Star size="24px" className="star" style={{ color: 'var(--dark-navy)' }} onClick={handleStarClick} />
            )}
          </div>
        </div>
        <div style={{ color: 'var(--black)' }}>{props.description}</div>
        {props.link && props.linkText ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link
              className="card-link custom-link truncated"
              target="_blank"
              to={props.link}
              style={{ whiteSpace: 'normal' }}
            >
              {props.linkText}
            </Link>
            <FaExternalLinkAlt className="mx-2 mt-1" />
          </div>
        ) : null}
        <div
          style={{
            marginTop: 'auto',
            marginLeft: 'auto',
            marginBottom: '8px',
            marginRight: '8px',
          }}
        >
          <Link to={props.servicePath}>
            <Button className="card-button">{t('Accedi')}</Button>
          </Link>
        </div>
      </Container>
    </Col>
  );
}
