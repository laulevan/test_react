import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import "./header.css"
class Header extends React.Component {
    componentDidMount(){
        // const width = window.innerWidth;
        // document.getElementsByClassName("triangle")[0].style.borderLeftWidth = width/2 + 'px'
        // document.getElementsByClassName("triangle")[0].style.borderRightWidth = width/2 + 'px'
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" variant="light" bg="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home">Henry Chou</Navbar.Brand>
                    <div className="info-help">123123</div>
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
                        {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                </Nav.Link>
                    </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
                {/* <div className="shape">
                    <div className="triangle">
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Header;
