import React from 'react';

import { Button, Container, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function Appelli() {
  const location = useLocation();
  const nome = location.state.nome;
  const codice = location.state.codice;

  return (
    <>
      <Container className="custom-container m-0">
        <Table striped responsive bordered className="custom-table my-2">
          <thead>
            <tr>
              <th className="custom-th">Codice</th>
              <th className="custom-th">Nome</th>
              <th className="custom-th">Data</th>
              <th className="custom-th"></th>
            </tr>
          </thead>
          <tbody>
            <tr key="01">
              <td className="custom-td medium-weight" style={{ backgroundColor: 'var(--background)' }}>
                {codice}{' '}
              </td>
              <td className="custom-td medium-weight" style={{ backgroundColor: 'var(--background)' }}>
                {nome}
              </td>
              <td className="custom-td" style={{ backgroundColor: 'var(--background)' }}>
                20/01/2023
              </td>
              <td className="custom-td text-center" style={{ backgroundColor: 'var(--background)' }}>
                <Button className="custom-button">Prenota</Button>
              </td>
            </tr>
            <tr key="02">
              <td className="custom-td medium-weight">{codice}</td>
              <td className="custom-td medium-weight">{nome}</td>
              <td className="custom-td">08/02/2023</td>
              <td className="custom-td text-center">
                <Button className="custom-button">Prenota</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
