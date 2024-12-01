import React, { useContext } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Bell, BellFill } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { AvvisiContext } from '../App';

export default function CourseSummary(props) {
  const navigate = useNavigate();

  const { codice, nome, periodo, crediti, linkGuida } = props;

  const { avvisi, setAvvisi } = useContext(AvvisiContext);

  const handleBellClick = e => {
    e.preventDefault();

    const codice = props.codice;
    const nome = props.nome;
    const periodo = props.periodo;
    const crediti = props.crediti;
    const linkGuida = props.linkGuida;
    const newAvvisi = avvisi[0].filter(obj => {
      return obj.course !== nome;
    });

    setAvvisi([newAvvisi]);

    navigate(`/didattica/${nome}/avvisi`, { state: { codice, nome, periodo, crediti, linkGuida } });
  };

  return (
    <ListGroup.Item className="summary">
      <Container
        className="link-container p-0"
        as={Link}
        to={`/didattica/${props.nome}/materiale`}
        state={{ codice, nome, periodo, crediti, linkGuida }}
      >
        <Row>
          <Col xs={4} sm={3} className="course-detail ps-2">
            {props.codice}
          </Col>
          <Col xs={8} sm={6} className="course-detail ps-4">
            <span className="truncated">{props.nome}</span>
          </Col>
          <Col xs={10} sm={2} className="detail truncated pe-3">
            {props.crediti} CFU
          </Col>
          <Col className="p-0" style={{ position: 'relative', left: '-8px' }}>
            {avvisi[0].some(obj => {
              return obj.course === props.nome;
            }) ? (
              <BellFill className="zooming-icon" size={20} onClick={handleBellClick} style={{}} />
            ) : (
              <Bell className="zooming-icon" size={20} onClick={handleBellClick} style={{}} />
            )}
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

CourseSummary.propTypes = {
  codice: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  periodo: PropTypes.number.isRequired,
  crediti: PropTypes.number.isRequired,
  linkGuida: PropTypes.string,
};
