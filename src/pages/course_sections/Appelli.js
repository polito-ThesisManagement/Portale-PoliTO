import React from 'react';

import { useLocation } from 'react-router-dom';

import { Button, Container, Table } from 'react-bootstrap';

export default function Appelli() {
  const location = useLocation();
  const nome = location.state.nome;
  const codice = location.state.codice;

  return (
    <>
      <Container className="custom-container m-0">
        <Table striped responsive bordered className="custom-table my-2" style={{ fontFamily: 'var(--font-primary)' }}>
          <thead style={{ fontFamily: 'var(--font-primary)' }}>
            <tr>
              <th>Codice</th>
              <th>Nome</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr key="01">
              <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{codice}</td>
              <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{nome}</td>
              <td>20/01/2023</td>
              <td className="text-center">
                <Button className="custom-button">Prenota</Button>
              </td>
            </tr>
            <tr key="02">
              <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{codice}</td>
              <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{nome}</td>
              <td>08/02/2023</td>
              <td className="text-center">
                <Button className="custom-button">Prenota</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
