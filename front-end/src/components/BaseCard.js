import React, { useContext, useEffect, useState } from 'react';

import { Button, Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { faStar as faRegStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { FavoritesContext, ThemeContext } from '../App';
import '../styles/card.css';
import { getSystemTheme } from '../utils/utils';

export default function BaseCard(props) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

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
      const favorite = JSON.stringify(obj);
      setFavorites([...favorites, favorite]);
    } else {
      setFavorites(favorites.filter(fav => JSON.parse(fav).service !== props.service));
    }
  };

  return (
    <Col sm={6} md={6} lg={6} xl={4} className="mb-3">
      <Card className="h-100 roundCard">
        <Card.Header className="border-0">
          <div className="d-flex pt-2 justify-content-between align-items-center section-title">
            <Col sm={7} md={8}>
              <span>{props.icon}</span>
              <span className="position-relative">{props.service}</span>
            </Col>
            <Col sm={5} md={4} className="d-flex justify-content-end">
              {starClicked ? (
                <FontAwesomeIcon icon={faStar} size={'lg'} className="star-fill" onClick={handleStarClick} />
              ) : (
                <FontAwesomeIcon icon={faRegStar} size={'lg'} className="star" onClick={handleStarClick} />
              )}
            </Col>
          </div>
        </Card.Header>
        <Card.Body>
          {props.description}
          {props.link && props.linkText ? (
            <div className="d-flex align-items-center">
              <Link
                className="card-link custom-link truncated"
                target="_blank"
                to={props.link}
                style={{ whiteSpace: 'normal' }}
              >
                {props.linkText}
              </Link>
              <i className="fa fa-arrow-up-right-from-square mx-2 mt-1" />
            </div>
          ) : null}
        </Card.Body>
        <Card.Footer className="border-0">
          <Row>
            <Col sm={12} className="pb-2">
              <div className="d-flex justify-content-end">
                <Link to={props.servicePath} style={{ textDecoration: 'none' }}>
                  <Button className={`btn-${appliedTheme}`} size="md">
                    <i className="fa fa-arrow-up-right-from-square" />
                    {t('Accedi')}
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}

BaseCard.propTypes = {
  icon: PropTypes.node,
  service: PropTypes.string.isRequired,
  servicePath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
};
