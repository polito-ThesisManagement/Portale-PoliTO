import { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "react-bootstrap";
import { Table, Form } from "react-bootstrap";

import { Mortarboard, GlobeAmericas, Building, ArrowRightShort } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


const thesis = [
    {
        titolo: "Sviluppo di un Framework JavaScript per la Gestione di Grandi Dati",
        relatore: "Alessandro Verdi",
        corelatore: "Maria Rossi",
        inAzienda: true,
        estero: false
    },
    {
        titolo: "Ottimizzazione delle Prestazioni delle Applicazioni Web Utilizzando ECMAScript 2023",
        relatore: "Laura Bianchi",
        corelatore: "Giuseppe Russo",
        inAzienda: false,
        estero: false
    },
    {
        titolo: "Implementazione di un Sistema di Intelligenza Artificiale in JavaScript per Applicazioni",
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
]

const researchGroups = [
    "04-Automazione e Robotica",
    "08- Dinamica, controllo e simulazione del volo",
    "11 - LAQ AerMec per componenti di turbine e compressori",
    "14-Meccatronica e servosistemi",
    "21-Progetto di velivoli e strutture aerospaziali in materiale composito",
    "AA - Glasses, Ceramics and Composites",
    "AA - MOLE (Molecular Engineering Lab)",
    "AA - Materials and Processes for Micro and Nano Technologies",
    "AA - Polymeric Materials",
    "AA - Quantum phases and dynamics of bosonic lattice systems",
    "Analisi non lineare e calcolo delle variazioni",
    "Applied Electromagnetics",
    "COMPUTER NETWORKS GROUP - NETGROUP",
    "Carbon Group",
    "Construction History CHG",
    "DAUIN - GR-03 - COMPUTER NETWORKS GROUP - NETGROUP",
    "DAUIN - GR-06 - ELECTRONIC DESIGN AUTOMATION - EDA",
    "EDA Group",
    "ELECTRONIC DESIGN AUTOMATION - EDA",
    "ESSENTIAL",
    "Energy Center Lab",
    "GR-03 - COMPUTER NETWORKS GROUP - NETGROUP",
    "GR-06 - ELECTRONIC DESIGN AUTOMATION - EDA",
    "GR-09 - GRAphics and INtelligent Systems - GRAINS",
    "ICT4SS - ICT FOR SMART SOCIETIES",
    "ICTA @UPV (https://icta.webs.upv.es/en/)",
    "Ingegneria degli acquiferi / Groundwater engineering",
    "Laboratory for Engineering of the Neuromuscular System (LISiN)",
    "Materials - Enviroment Interaction",
    "Meccanica del Veicolo",
    "Metodi e modelli matematici per sistemi complessi",
    "MiNES (Micro&Nano Electronic Systems)",
    "Microwaves and Optoelectronics Group",
    "NETGROUP",
    "Pianificazione e politiche urbane e territoriali",
    "TEBE",
    "VLSILAB (VLSI theory, design and applications)",
    "https://areeweb.polito.it/drsil/",
    "https://peer.berkeley.edu/",
    "https://staff.polito.it/gianpaolo.cimellaro/index.html",
    "https://www.eucentre.it/fondazione-eucentre-pavia/filiatrault-andre/",
    "microelettronica"
]



//filtri azienda, estero, 
export default function Tesi() {

    const [inAzienda, setInAzienda] = useState(false);
    const [estero, setEstero] = useState(false);

    const [filtered, setThesis] = useState(thesis);

    useEffect(() => {
        const filteredThesis = thesis.filter(element => {
            if (inAzienda && estero) {
                return element.inAzienda && element.estero;
            } else if (inAzienda && !estero) {
                return element.inAzienda;
            } else if (estero && !inAzienda) {
                return element.estero;
            } else {
                return true;
            }

        })

        setThesis(filteredThesis);

    }, [inAzienda, estero]);

    const [theses, setTheses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTheses = async () => {
            const lang = "IT"; // IT or EN
            try {
                const thesesArray = await Promise.all(
                    researchGroups.map(async (grp) => {
                        const response = await axios.get(`http://localhost:5000/api/theses`, {
                            params: { grp, lang }
                        });
                        return response.data.thesis;
                    })
                );
                const allTheses = thesesArray.flat();
                setTheses(allTheses);
                console.log("Theses final:", allTheses);
            } catch (error) {
                console.error('Error fetching theses:', error);
            }
        };
    
        fetchTheses();
    }, []);

    /*
        <Link to='/'>Home</Link>
        <Link to='/carriera'>Carriera</Link>
        */

    //to be added searchbar, filter and rounded border
    return (
        <>
            <div className="d-flex mt-3 mx-3">
                <div>
                    <Link to='/'>Home</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <div>
                    <Link to='/carriera'>Carriera</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <span style={{color: '#808080'}}>Tesi</span>
            </div>
            <Container className='mt-5 me-3'>
                <div className="d-flex justify-content-start">
                    <Mortarboard size={40} />
                    <h1 style={{ marginLeft: '8px', fontFamily: 'Helvetica' }}>Elenco proposte di Tesi</h1>
                    <Form.Check label="In Azienda" aria-label="option 1" style={{ paddingTop: '15px', paddingRight: '20px', marginLeft: '10px' }}
                        value={inAzienda} onChange={() => inAzienda ? setInAzienda(false) : setInAzienda(true)} />
                    <Form.Check label="Estero" aria-label="option 2" style={{ paddingTop: '15px' }}
                        value={estero} onChange={() => estero ? setEstero(false) : setEstero(true)} />
                </div>
                <div className="p-3 ">
                    <Table striped responsive="sm" hover="primary">
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Titolo</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Relatore</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Corelatore</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>In Azienda</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Estero</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(element => (
                                <tr key={element.titolo}>
                                    <td>{element.titolo}</td>
                                    <td>{element.relatore}</td>
                                    <td>{element.corelatore}</td>
                                    <td style={{ textAlign: 'center' }}>{element.inAzienda ? <Building /> : ""}</td>
                                    <td style={{ textAlign: 'center' }}>{element.estero ? <GlobeAmericas /> : ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
}