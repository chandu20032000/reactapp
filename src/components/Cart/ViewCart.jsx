import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import NavigationBar from '../nav/NavigationBar';
import IncDec from './InDec';
import ViewcartService from '../Services/Cart/ViewcartService';

class ViewCart extends Component{
    constructor(props){
        super(props);
        this.state={
            items : []
        }
        this.deleteItem=this.deleteItem.bind(this);
       
    }
    componentDidMount(){
        ViewcartService.getCartItems("Saichand900000@").then((res)=>{
            console.log(res.data)
            this.setState({
                items:res.data
            })
        })
       
        
    }
    deleteItem(cartItemId)
    {
        console.log(cartItemId);
        ViewcartService.deleteCartItem(cartItemId).then((res)=>{
            this.props.history.go(0);
            window.alert("item deleted");
            
        })
    }
    
    render(){
        return(
            <div>
                <Row>
                    <Col>
                    <NavigationBar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Table>
                    <thead>
                      <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Remove</th>
                      </tr>
                    
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.cartItemId}>
                                <td className="text-break text-break text-center text-wrap">{item.productName}</td>
                                <td className="text-break text-break text-center text-wrap">{item.price}</td>
                                <td><IncDec/> </td>
                                <td><button onClick={()=>this.deleteItem(item.cartItemID)} style={{marginLeft: "10px"}} className="btn btn-danger">Remove</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                </Row>
                </div>  
           
        );
    }
}
export default ViewCart;