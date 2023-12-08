import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

export default function Appelli() {

    const location = useLocation();
    const nome = location.state.nome;
    const codice = location.state.codice;


    return (
        <>
            <Container className="custom-container m-0">
                <div className="text-start my-3 pt-2">
                    <h6 className="text-style" style={{ fontWeight: '500' }}>
                        In questa sezione è possibile visualizzare le date degli appelli d'esame e iscriversi agli stessi:
                    </h6>
                </div>
                <Table striped responsive bordered className='custom-table my-2' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <thead style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <tr>
                            <th>Codice</th>
                            <th>Nome</th>
                            <th>Data Appello</th>
                            <th>Prenota Esame</th>
                            <th>Annulla</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key='01'>
                            <td style={{ fontWeight: 500 }}>{codice}</td>
                            <td style={{ fontWeight: 500 }}>{nome}</td>
                            <td>20/01/2023</td>
                            <td><Button className='custom-button'>Prenota</Button></td>
                            <td><Button className='custom-button'>Annulla</Button></td>
                        </tr>
                        <tr key='02'>
                        <td style={{ fontWeight: 500 }}>{codice}</td>
                            <td style={{ fontWeight: 500 }}>{nome}</td>
                            <td>08/02/2023</td>
                            <td><Button className='custom-button'>Prenota</Button></td>
                            <td><Button className='custom-button'>Annulla</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );

}