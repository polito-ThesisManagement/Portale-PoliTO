import { Container } from 'react-bootstrap';

import OrarioLezioniAgenda from '../../components/OrarioLezioniAgenda';

export default function OrarioCorso() {
  return (
    <>
      <Container className="custom-container m-0">
        <div className="subsection">
          <OrarioLezioniAgenda />
        </div>
      </Container>
    </>
  );
}
