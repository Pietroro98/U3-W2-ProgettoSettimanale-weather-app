
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';

const MyNavbar = function() {
    return (
        <Navbar bg="primary" expand="lg" className="p-3">
            <Container>
                <Navbar.Brand href="/" className="text-white">Weather App</Navbar.Brand>
                <Form className="w-100 d-flex justify-content-center">
                    <FormControl
                        type="text"
                        placeholder="Enter city"
                        className="me-4 w-75"
                    />
                    <Button type="submit" variant="outline-light">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;