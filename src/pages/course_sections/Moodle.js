import React from 'react';
import { Container, Button } from "react-bootstrap";


export default function Moodle() {

    return (
        <>
            <Container className="custom-container m-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-center my-3">
                    <h6 className="text-style" style={{ fontWeight: '500' }}>
                        Questo servizio mette a disposizione prove d'esame degli anni precedenti e una vasta gamma di esercizi mirati a migliorare la comprensione e la pratica degli argomenti pertinenti all'esame in questione
                    </h6>
                </div>
                <Button className="custom-button mb-2">Accedi a moodle</Button>
            </Container>
        </>
    );

}