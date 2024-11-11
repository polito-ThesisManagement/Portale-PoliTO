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
              <th style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>Codice</th>
              <th style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>Nome</th>
              <th style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>Data</th>
              <th style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}></th>
            </tr>
          </thead>
          <tbody>
            <tr key="01">
              <td
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--text)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {codice}
              </td>
              <td
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--text)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {nome}
              </td>
              <td style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>20/01/2023</td>
              <td style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }} className="text-center">
                <Button className="custom-button">Prenota</Button>
              </td>
            </tr>
            <tr key="02">
              <td
                style={{
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {codice}
              </td>
              <td
                style={{
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {nome}
              </td>
              <td style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>08/02/2023</td>
              <td style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }} className="text-center">
                <Button className="custom-button">Prenota</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
