import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css"


export default function Menu() {
  return (
    <Container>
  <Navbar expand="xs" className={`${style.navGradiente} px-4 my-4 border-3 border border-info-subtle rounded-3`}>
      
        <Navbar.Brand href="/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <Nav.Link href="/promessa">Promessa</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}

