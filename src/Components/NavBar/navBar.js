
import Container from 'react-bootstrap/Container';
import Cart from '../Cart/Cart';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation () {
return(
<Navbar bg="light" expand="lg" color='white' text='text-light' className='text-light'>
    <Container>
        <Navbar.Brand src="../Home/Images/logo-Reaction.PNG">Reaction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="../../Screens/Home.js">Home</Nav.Link>
            <Nav.Link href="link">Catalogo</Nav.Link>
            <Nav.Link href="link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Electro</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Pequeños electros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Hogar y Jardin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Herramientas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Carrito
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Container>
    <Cart/>
</Navbar>)
}



export default Navigation;