
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    return (
        <>
                <Navbar key='lg' expand='lg' className="px-lg-5">
                    <Container fluid >
                        <Navbar.Brand href="#">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">New & Featured</Nav.Link>
                                    <Nav.Link href="#action2">Men</Nav.Link>
                                    <Nav.Link href="#action3">Women</Nav.Link>
                                    <Nav.Link href="#action4">Kids</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Button variant="">
                                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                                    </Button>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        style={{ borderRadius: '50px',background: '#f5f5f5'}}
                                    />
                                </Form>
                                <Nav md={3} className='d-lg-inline d-sm-block pt-1'>
                                    <Button variant="light"><i className="fa-regular fa-heart px-1"></i></Button>
                                    <Button variant="light"><i className="fa-solid fa-cart-plus"></i></Button>
                                    <Button variant="light" className=''>Sign In</Button>
                                    <Button variant="dark" className=''>Sign Up</Button>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        </>
    )
}

export default Header;