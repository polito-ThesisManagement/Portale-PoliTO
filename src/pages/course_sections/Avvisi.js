import React from 'react';
import { Container } from "react-bootstrap";

import { useLocation } from "react-router-dom";

import Avvisi_GC from '../../data/Avvisi_GC.json';

export default function Avvisi() {

    const location = useLocation();
    const  nome = location.state.nome;

    const avvisi = Avvisi_GC;

    console.log(nome);

    return (
        <>
            <Container className="custom-container m-0">
                <div className="subsection">
                    {avvisi
                        .filter((avviso) => avviso.course === nome)
                        .map((avviso) => (
                            console.log(avviso),
                            <div key={avviso.id} className="avviso">
                                <div>
                                    <span className="text-style" style={{fontWeight: '600'}}>{avviso.data}</span>
                                    <span style={{fontWeight: '600'}}>{" - "}</span>
                                    <span className="text-style" style={{fontWeight: '600'}}>{nome}</span>
                                </div>
                                <div>
                                    <span className="text-style" style={{fontWeight: '500'}}>{avviso.sender}</span>
                                </div>
                                <div>
                                    <span className="text-style">{avviso.body}</span>
                                </div>
                            </div>
                        ))}
                </div>
            </Container>
        </>
    );

}