import React from 'react';

import { Button, Container } from 'react-bootstrap';

export default function Moodle() {
  return (
    <>
      <Container className="custom-container m-0 d-flex flex-column align-items-center justify-content-center">
        <div className="my-3">
          <h6 className="text-style medium-weight" style={{ color: 'var(--text)' }}>
            Questo servizio mette a disposizione esercitazioni, simulazioni e prove d'esame volti a migliorare la
            comprensione e la pratica degli argomenti relativi all'insegnamento.
          </h6>
        </div>
        <Button className="custom-button mb-2">Accedi a Moodle</Button>
      </Container>
    </>
  );
}
