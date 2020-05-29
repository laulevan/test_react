import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import "./header.css"
class Header extends React.Component {
    
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" variant="light" bg="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home">Henry Chou</Navbar.Brand>

                    <i className='far fa-question-circle question'></i>
                    <i className='far fa-bell bell'></i>
                    <div className="fin">
                        <table>
                            <tr>
                                <td><div className="rec-hide"></div></td>
                                <td><div className="rec-hide"></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                            </tr>
                            <tr>
                                <td><div className="rec-hide"></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                            </tr>
                            <tr>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                            </tr>
                            <tr>
                                <td ><div className="rec-hide"></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                            </tr>
                            <tr>
                                <td><div className="rec-hide"></div></td>
                                <td><div className="rec-hide"></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                            </tr>
                        </table>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
