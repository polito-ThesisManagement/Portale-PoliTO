import { Container, Row, Col } from "react-bootstrap";
import { HiHome } from "react-icons/hi";

export default function Servizi() {
    return (
        <>
            <div className="title">
                <HiHome size={28} />
                <span className="section-title" style={{marginLeft:'5px', marginTop:'3px'}}>Servizi</span>
            </div>
            <Row>
                <Col xs= {9}>
                    <Container className="custom-container">
                        prova
                    </Container>
                </Col>
                <Col xs={3}>
                    <Container className="custom-container">
                        prova2
                    </Container>
                </Col>
            </Row>
        </>
    );  

}