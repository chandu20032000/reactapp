import { Navbar, Nav, Container, NavDropdown, Row,Col} from 'react-bootstrap';
import {Component} from 'react';
class NavigationBar extends Component{
render(){
    return (
    <Navbar className="navbar navbar-dark bg-dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">Footwear Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          <NavDropdown title="Men" id="basic-nav-dropdown">
            <NavDropdown.Item href="#men/sports">Sports</NavDropdown.Item>
            <NavDropdown.Item href="#men/casual">Casual</NavDropdown.Item>
            <NavDropdown.Item href="#men/formal">Formal</NavDropdown.Item>
            <NavDropdown.Item href="#men/party">Party</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title ="Women" id ="basic-nav-dropdown">
          <NavDropdown.Item href="#women/sports">Sports</NavDropdown.Item>
          <NavDropdown.Item href="#women/casual">Casual</NavDropdown.Item>
          <NavDropdown.Item href="#women/formal">Formal</NavDropdown.Item>
          <NavDropdown.Item href="#women/party">Party</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title ="Kids" id ="basic-nav-dropdown">
          <NavDropdown.Item href="#kids/sports">Sports</NavDropdown.Item>
          <NavDropdown.Item href="#kids/casual">Casual</NavDropdown.Item>
          <NavDropdown.Item href="#kids/formal">Formal</NavDropdown.Item>
          <NavDropdown.Item href="#kids/party">Party</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div class="input-group">
    <div id="search-autocomplete" class="ml-auto">
      <input type="search" id="form1" class="form-control" placeholder ="Search" />
      </div>
    <button type="button" class="btn btn-primary">
      <i  ><img src="https://img.icons8.com/external-others-royyan-wijaya/20/000000/external-interface-revamp-4-others-royyan-wijaya-2.png"/></i>
    </button>
  </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
 }


}
export default NavigationBar;