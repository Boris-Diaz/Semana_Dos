import { Navbar, Nav, Container } from "react-bootstrap";
import {Link, Outlet } from "react-router-dom";



const NavbarPincipal =()=> {
  

    return (
      <>
        <Navbar className="navBg" bg="black"  data-bs-theme="dark"  expand="lg">
          <Container fluid>
       
          <Navbar.Brand as={Link}to="home">BMD</Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
            <Nav.Link as={Link}to="home">Inicio</Nav.Link>
            <Nav.Link as={Link}to="actividades">Actividades</Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

       <section>
        <Outlet></Outlet>
       </section>
        
      </>
    )
  }


export default NavbarPincipal