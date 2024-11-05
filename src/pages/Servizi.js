import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

import { FaLink } from 'react-icons/fa6';
import { MdApps, MdMapsHomeWork } from 'react-icons/md';
import { TiArrowForward } from 'react-icons/ti';

import BaseCard from '../components/BaseCard';
import Title from '../components/Title';
import LinkUtili from '../data/LinkUtili.json';
import '../styles/Utilities.css';

export default function Servizi() {
  return (
    <>
      <Title icon={<MdApps size={28} style={{ position: 'relative', bottom: '1px' }} />} sectionName="Servizi" />
      <Container style={{ marginLeft: '0px', maxWidth: '1416px' }}>
        <Row className="p-0">
          <BaseCard
            icon={<MdMapsHomeWork size="42" className="card-icon" />}
            service={'Aule libere'}
            description={'Ricerca aule libere per fascia oraria.'}
            servicePath={'/servizi'}
          />
          <Col lg={4} className="ms-auto">
            <Container className="custom-container">
              <div className="subsection">
                <span className="subsection-title">
                  <FaLink size={20} className="subsection-icon" style={{ position: 'relative', bottom: '1px' }} />
                  Link utili
                </span>
              </div>
              <ListGroup>
                {LinkUtili.map(link => {
                  return (
                    <ListGroup.Item key={link.servizio} className="px-1" style={{ border: 'hidden' }}>
                      <Link to={link.link} target="_blank" className="custom-link">
                        <TiArrowForward className="me-1" style={{ marginBottom: '2px' }} />
                        {link.servizio}
                      </Link>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
