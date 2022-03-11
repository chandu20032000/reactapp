import './Sidenav.css';
import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import Image from 'react';
import SideNav from './AdminSideNav';
class UserManagement extends Component{
    constructor(props){
        super(props);
        this.state ={
              users: []
        }
    }
      render(){
          return (
              <div>
                  <Container fluid>
                      <Row>
                          <Col xs ="2" id="sidebar-wrapper" className="bg-dark">
                              <div>
                              <h2 className="text-light">
                                  Admin 
                              </h2>
                              <SideNav/>
                              </div>
                              
                          </Col>
                          <Col xs ="10">
                             <h2 className="text-center"> Users List</h2>
                                <div>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>User First Name</th>
                                                 <th> User Mobile Number</th>
                                                <th> User Email ID</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.users.map(
                                                    user =>
                                                    <tr key ={user.id}>
                                                        <td>{user.firstName}</td>
                                                        <td>{user.mobileNumber}</td>
                                                        <td>{user.emailId}</td>
                                                        <td></td> 
                                                    
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>

                                </div>
                        </Col>
                      </Row>

                  </Container>
              </div>
          )
      }
}
export default UserManagement;