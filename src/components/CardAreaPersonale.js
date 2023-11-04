import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Star, StarFill, CaretRightFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

///////// IMPORTANTE //////////
// MODIFICARE TUTTI I LINK 
export default function CardAreaPersonale(icon, title, description, service) {

    const [starClicked, setStarClicked] = useState(false);

    const handleStarClick = () => {
        setStarClicked(!starClicked);
        /* Dovremo aggiungere a vettore la stella 
        if (!starClicked) {
          
        }
        */
    };

    const star = () => {
        return (
            <span className='ms-3'>
                {starClicked ? (
                    <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                ) : (
                    <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                )}
            </span>
        );
    };

    

    if (service === 'Certificati') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row className="d-flex justify-content-between">
                        <Card.Link as={Link} to='/opportunita/job' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza e stampa certificati {star()}
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/job' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza e stampa autocertificazioni {star()}
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/job' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza e stampa movimenti conto {star()}
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
    }  else if (service === 'Dati Personali') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/tirocinio' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza i tuoi dati personali 
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
 
    }  else if (service === 'Agenda') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/tirocinio' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi ad Agenda
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
 
    }  else if (service === 'Prenotazioni') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/tirocinio' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi alle Prenotazioni 
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
 
    }  else if (service === 'Curriculum') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/tirocinio' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi al tuo Curriculum per visionarlo, modificarlo o caricarne uno personale 
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
 
    }  else if (service === 'Impostazioni Utente') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/tirocinio' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                             Accedi alle impostazioni
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
 
    } 
}
