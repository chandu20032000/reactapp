import React, { Component } from 'react';
import NavigationBar from './nav/NavigationBar';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import Image from 'react';
import ProductService from './Services/Admin/ProductService';
import ViewcartService from './Services/Cart/ViewcartService';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            email:this.props.location.state,
            products : [],
            user:JSON.parse(localStorage.getItem('user'))
        }
      this.addToCart=this.addToCart.bind(this);
    }
   
    componentDidMount(){
        ProductService.getProducts().then((res)=>{
           this.setState({
               products:res.data
           }) 
           console.log(res.data)
        })
        
    }
    addToCart(id,product)
    {
       ViewcartService.addItemToCart(id,product).then((res)=>{
           
           console.log(id)
           console.log(this.props.location.state.email)
           window.alert("added to cart")
       })
    }
    render() {
        return (
            <div>
                <div >
       <NavigationBar/> 
     </div>
            <Container fluid >
                <Row xs={1} md={4} className="g-4 ">
                  
                               {
                             this.state.products.map(
                                 product=><Col className="col-md-12 col-lg-3 mb-2 mb-lg-0" key={product.productId} >
                                 <Card style={{margin:"10px"}}>
                              <Card.Title className="d-flex justify-content-between p-3 lead mb-0">Card Title</Card.Title>
                             <Card.Img variant="top" style={{height:"200px"}} src={product.imageUrl} />
                                   <Card.Body>
               
                                <Card.Text className="d-flex justify-content-between mb-2">
                                
                                     <h5>{product.productName}</h5>
                                    
                                     <h5>{product.price}</h5>
                                     
                                    </Card.Text>
                                    <Card.Text className="d-flex justify-content-between mb-2">
                                        
                                        <p className="text-muted mb-3">Available: <span className="fw-bold">{product.quantity}</span></p>
                                         <Button variant="primary" onClick={()=>this.addToCart(this.props.location.state.email,product)}>Add to Cart</Button>
                                   
                                   </Card.Text>
                                     
                                  </Card.Body>
                                   </Card>
                                     </Col> 
                             )

                             
                         }             
                 
                 </Row>
            </Container>
        </div>
        );
    }
}

export default Home;