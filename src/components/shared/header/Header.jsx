import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-white text-decoration-none'>Car-Service</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/feature' className='text-white text-decoration-none'>Features</Link></Nav.Link>
                            <Nav.Link><Link to='/price' className='text-white text-decoration-none'>Pricing</Link></Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                {
                                    user? user?.displayName : 
                                    <Link className='text-decoration-none text-white' to='/register'>Sign Up</Link>
                                }
                                </Nav.Link>
                            <Nav.Link eventKey={2}>
                                {
                                    user ? 
                                    <button onClick={handleLogOut} className='btn btn-link text-white text-decoration-none p-0 m-0' to='/login'>Log Out</button> : 
                                    <Link  className='text-decoration-none text-white' to='/login'>Login</Link> 
                                }
                            
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    );
};

export default Header;