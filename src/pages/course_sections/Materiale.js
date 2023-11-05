import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function Materiale() {

    //non presente nella nuova architettura, se elimi la pagina elimina anche il tutto su Data.json 
    return (
        <>
            <Container>
                <Row>
                    barre navigazione
                </Row>
                <Row>
                    <Col>Scaletta Materiale</Col>
                    <Col xs={9}> Cartelle e Materiale</Col>
                </Row>

            </Container>
        </>
    );  

}