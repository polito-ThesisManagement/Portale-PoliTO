import { Container } from "react-bootstrap";

import { Translate } from "react-bootstrap-icons";

import '../../styles/App.css';

export default function Lingue() {
 
    return (
        <>
             <Container className='my-3'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Translate size={25} className='me-2' />
                    <h1 className="text-style">Lingue</h1>
                </div>
            </Container>
        </>
    );  

}