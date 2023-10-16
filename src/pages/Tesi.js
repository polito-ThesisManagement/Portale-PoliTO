import { useState } from "react";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Mortarboard, GlobeAmericas, Building } from "react-bootstrap-icons";



//filtri azienda, estero, 
export default function Tesi() {

    const [thesis, setThesis] = useState([
        {
            titolo: "Sviluppo di un Framework JavaScript per la Gestione di Grandi Dati",
            relatore: "Alessandro Verdi",
            corelatore: "Maria Rossi",
            inAzienda: true,
            estero: false
        },
        {
            titolo: "Ottimizzazione delle Prestazioni delle Applicazioni Web Utilizzando le Nuove Caratteristiche di ECMAScript 2023",
            relatore: "Laura Bianchi",
            corelatore: "Giuseppe Russo",
            inAzienda: false,
            estero: false
        },
        {
            titolo: "Implementazione di un Sistema di Intelligenza Artificiale in JavaScript per Applicazioni Aziendali",
            relatore: "Marco Neri",
            corelatore: "Dott. Sofia Ferrari",
            inAzienda: true,
            estero: false
        },
        {
            titolo: "Analisi e Miglioramento della Sicurezza delle Applicazioni Web in JavaScript",
            relatore: "Luca Martini",
            corelatore: "Dott. Andrea Conti",
            inAzienda: false,
            estero: false
        },
        {
            titolo: "Riprogettazione ux portale poli",
            relatore: "Luca Martini",
            corelatore: "",
            inAzienda: false,
            estero: false
        },
        {
            titolo: "Development of a Cross-Platform JavaScript Framework for Mobile Applications",
            relatore: "John Smith",
            corelatore: "Emily Johnson",
            inAzienda: true,
            estero: true
        },
        {
            titolo: "Exploring the Impact of JavaScript in Global E-Commerce Platforms",
            relatore: "Maria Rodriguez",
            corelatore: "James Lee",
            inAzienda: false,
            estero: true
        },
        {
            titolo: "Building Real-time Collaboration Tools with JavaScript for International Teams",
            relatore: "Akira Tanaka",
            corelatore: "",
            inAzienda: true,
            estero: true
        },
        {
            titolo: "Security Challenges in JavaScript Applications: A Global Perspective",
            relatore: "Andreas Müller",
            corelatore: "",
            inAzienda: false,
            estero: true
        },
        {
            titolo: "Sviluppo di applicazione WellBeing per il monitoraggio della salute mentale",
            relatore: "Marco Neri",
            corelatore: "Ing. Marco Rossi",
            inAzienda: true,
            estero: false
        },
        {
            titolo: "Analisi dei dati del comine di trento per la gestione del traffico",
            relatore: "Alessandro Verdi",
            corelatore: "",
            inAzienda: false,
            estero: false

        }
    ]);


    //to be added searchbar, filter and rounded border
    return (
        <Container className="my-5 mx-5">
            <div className="d-flex justify-content-start">
                <Mortarboard size={40} />
                <h1 style={{ marginLeft: '8px' }}>Elenco proposte di Tesi</h1>
            </div>
            <div className="p-3 ">
                <Table bordered responsive="sm" hover="primary">
                    <thead>
                        <tr>
                            <th style={{backgroundColor : 'azure'}}>Titolo</th>
                            <th style={{backgroundColor : 'azure'}}>Relatore</th>
                            <th style={{backgroundColor : 'azure'}}>Corelatore</th>
                            <th style={{backgroundColor : 'azure'}}>In Azienda</th>
                            <th style={{backgroundColor : 'azure'}}>Estero</th>
                        </tr>
                        </thead>
                        <tbody>
                            {thesis.map(element => (
                                <tr key={element.titolo}>
                                    <td>{element.titolo}</td>
                                    <td>{element.relatore}</td>
                                    <td>{element.corelatore}</td>
                                    <td style={{textAlign : 'center'}}>{element.inAzienda ? <Building /> : ""}</td>
                                    <td style={{textAlign : 'center'}}>{element.estero ? <GlobeAmericas /> : ""}</td>
                                </tr>
                            ))}
                        </tbody>
                </Table>
            </div>
        </Container>
    );
}