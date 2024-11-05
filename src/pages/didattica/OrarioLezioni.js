import { Container, Form, InputGroup } from 'react-bootstrap';

import { ClockFill, Search } from 'react-bootstrap-icons';

import OrarioLezioniAgenda from '../../components/OrarioLezioniAgenda';

export default function OrarioLezioni() {
  return (
    <>
      <Container className="custom-container m-0">
        <div className="subsection">
          <span className="subsection-title">
            <ClockFill size={20} className="subsection-icon" style={{ marginBottom: '2px' }} />
            Ricerca orario
          </span>
        </div>
        <div className="subsection">
          <span className="important-detail">Ricerca orario lezioni insegnamento</span>
          <InputGroup className="my-1">
            <Form.Control
              placeholder="Inserisci nome dell'insegnamento..."
              aria-label=""
              aria-describedby="basic-addon2"
              style={{
                height: '40px',
                maxWidth: '500px',
                backgroundColor: '#F0F3F5',
                color: '#002B49',
                borderRadius: '8px',
              }}
            />
            <Search
              style={{
                marginRight: '-14px',
                position: 'relative',
                zIndex: '3',
                right: '28',
                top: '12',
              }}
            />
          </InputGroup>
          <OrarioLezioniAgenda />
        </div>
      </Container>
    </>
  );
}
