import { Container } from "react-bootstrap";
import OrarioLezioniAgenda from "../../components/OrarioLezioniAgenda";

export default function OrarioLezioni() {

    return(
        <>
            <Container className="custom-container m-0">
                <div className="subsection">
                <OrarioLezioniAgenda className=""/>
                </div>
            </Container>
        </>
    )
}