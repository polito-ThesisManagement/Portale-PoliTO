import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Star, StarFill, CaretRightFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

//height and width of card fixed could be changed
//otherwise, descriptions must be at most 4 lines long
//here we should handle different navigation bath based on the card clicked 
export default function MyCard(icon, title, description) {
    const [starClicked, setStarClicked] = useState(false);

    const handleStarClick = () => {
        setStarClicked(!starClicked);
        /* Dovremo aggiungere a vettore la stella 
        if (!starClicked) {
          
        }
        */
    };

    return (
        <Card style={{ width: '18rem', height: '12rem', backgroundColor: '#004C81' }}>
            <Card.Body className='d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                    <Card.Title style={{ color: '#FFFFFF' }}>
                        {icon} {title}
                    </Card.Title>
                    <span>
                        {starClicked ? (
                            <StarFill style={{color: '#EF7B00'}}onClick={handleStarClick} />
                        ) : (
                            <Star style={{color: '#FFFFFF'}}onClick={handleStarClick} />
                        )}
                    </span>
                </div>
                <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                    {description}
                </Card.Text>
                <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                    <CaretRightFill />
                    Accedi
                </Card.Link>
            </Card.Body>
        </Card>
    );

}