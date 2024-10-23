import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  return (
    <header>
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Protasyte
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
