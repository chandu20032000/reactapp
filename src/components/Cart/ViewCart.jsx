import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import NavigationBar from '../nav/NavigationBar';
import IncDec from './InDec';
import ViewcartService from '../Services/Cart/ViewcartService';
import OrderService from '../Services/Orders/OrderService';

class ViewCart extends Component{
    constructor(props){
        super(props);
        this.state={
            items : [],
            user:JSON.parse(localStorage.getItem('user'))
        }
        this.deleteItem=this.deleteItem.bind(this);
        this.addToOrders=this.addToOrders.bind(this);
       
    }
    componentDidMount(){
        if(this.state.user)
        {
            ViewcartService.getCartItems(this.state.user.email).then((res)=>{
                console.log(res.data)
                this.setState({
                    items:res.data
                })
            })
        }
       
       
       
        
    }
    deleteItem(cartItemId)
    {
        console.log(cartItemId);
        ViewcartService.deleteCartItem(cartItemId).then((res)=>{
            this.props.history.go(0);
            window.alert("item deleted");
            
        })
    }
    addToOrders(){
        let orders=[]
        let order=[]
        this.state.items.map(item=>
          order.push(
              {
              "productName":item.productName,
              "price":item.price,
              "userId":item.userId.id.toString(),
              "totalPrice":(item.quantity*(parseInt(item.price))).toString(),
              "quantity":item.quantity,
              "status":"Un paid"
              }
          )
          
        )
        console.log(order)
        OrderService.addToOrders("27",order).then((res)=>{
            this.props.history.push("/orders");
        })
       
    }
    
    render(){
        if(this.state.user)
        {

        
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
                <Button variant="primary" onClick={()=>this.addToOrders()}>Place Order</Button>
                </div>  
           
        );
                    }
        else{
            return(
                <Link to="/"></Link>
            )
        }            
    }
}
export default ViewCart;