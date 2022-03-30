import {React,Component} from 'react';

import { Container, Row,Col,Table} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import NavigationBar from '../nav/NavigationBar';
import OrderService from '../Services/Orders/OrderService';


class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            items : [],
            user:JSON.parse(localStorage.getItem('user'))
        }

    }
    componentDidMount(){
       OrderService.getUserOrders(this.state.user.id.toString()).then((res)=>{
           this.setState({
               items:res.data
              
           })
           console.log(res.data)
       })
       
        
    }
    
    render(){
        return(
            <div>
                <NavigationBar/>
            <Container fluid>

                <Row>
                    <Col>
                    <Table>
                    <thead>
                      <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          
                      </tr>
                    
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.orderId}>
                                <td className="text-break text-break text-center text-wrap">{item.productName}</td>
                                <td className="text-break text-break text-center text-wrap">{item.price}</td>
                                <td className="text-break text-break text-center text-wrap">{item.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                </Row>
                
            </Container>
            <Container>
                <Row>
                    <Col>
                    <Button type ="submit" variant="primary"> Pay </Button>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Order;