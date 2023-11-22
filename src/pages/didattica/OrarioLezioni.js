import { Container } from "react-bootstrap";
import OrarioLezioniAgenda from "../../components/OrarioLezioniAgenda";
import { ClockFill } from "react-bootstrap-icons";

export default function OrarioLezioni() {

    return(
        <>
            <Container className="custom-container m-0">
                <div className="subsection">
                            <span className="subsection-title">
                                <ClockFill size={20} className='subsection-icon' style={{marginBottom:'2px'}} />
                                Ricerca orario del corso
                            </span>
                        </div>
                <div className="subsection">
                <OrarioLezioniAgenda className=""/>
                </div>
            </Container>
        </>
    )
}