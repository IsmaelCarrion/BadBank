import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../traditional.png';
import Container from 'react-bootstrap/Container';

const Home = () => { 

    return (
        <Container className ='d-flex justify-content-center align-items-center'>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>BAD BANK</Card.Title>
                        <Card.Text>
                            Welcome: This is the BAD BANK WebSite. It has as its mission: Full Customers Satisfaction.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>We don't have physical branches</ListGroup.Item>
                        <ListGroup.Item>The Web is our only branch</ListGroup.Item>
                        <ListGroup.Item>You can access Bad Bank from all over the world</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Title>BAD BANK</Card.Title>
                        <Card.Text>
                                Note: There is preloaded data for demostration porposes of the App.
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;

