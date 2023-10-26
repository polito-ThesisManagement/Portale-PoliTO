import Card from 'react-bootstrap/Card';

//height and width of card fixed could be changed
//otherwise, descriptions must be at most 4 lines long
export default function MyCard(icon, title, description) {
    return (
        <Card border='primary' style={{ width: '18rem', height: '12rem' }}>
            <Card.Body className='d-flex flex-column'>
                <Card.Title style={{ color: '#1d3b55' }}>{icon} {title}</Card.Title>
                <Card.Text className='flex-grow-1'>
                    {description}
                </Card.Text>
                <Card.Link className="mt-auto" href="#">Accedi</Card.Link>
            </Card.Body>
        </Card>
    );

}