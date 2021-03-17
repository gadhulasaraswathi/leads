import { Button } from 'react-bootstrap'
import React from 'react'
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import './FormPage.css'

export default function FormPage() {
    return (
       <Container className="form_background">
           <Row className="details">
               <Col>
               <span >Contact Us</span>
               </Col>
           </Row>
           <Row className="contact">
               <Col>
               <span >Please fill the for demo....</span>
               </Col>
           </Row>
           <Row className="form_row">
               <Col xl={3}>
               <Form >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="email" placeholder="First name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="password" placeholder="Email" />
                    </Form.Group>
                    
                    
                    
                    </Form>
               </Col>
          
           
               <Col xl={3}>
               <Form >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="email" placeholder="Country" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="password" placeholder="State" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="password" placeholder="City" />
                    </Form.Group>
                    
                    
                    
                    </Form>
               </Col>

           
               <Col xl={3}>
               <Form >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Mobile" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control type="password" placeholder="Business Name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>No of Store</Form.Label>
                        <Form.Control type="password" placeholder="No of Store" />
                    </Form.Group>
                    
                    
                    
                    </Form>
               </Col>
              
               </Row>
               <Row className="example">
               <Col>
               <Form>
               <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
               </Form>

               </Col>
               </Row>
               <Row>
                   <Col>
                   <Button variant="primary" type="submit" className="button">
                        Submit
                    </Button>
                   </Col>
               </Row>
               <footer>
              
<Navbar fixed="bottom" className="bottom_nav_navbar" bg="light" variant="light">
           <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">All rights are reserved...</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Contact us</Nav.Link>
                <Nav.Link href="#features">Careers</Nav.Link>
                </Nav>
            </Navbar>
            <Navbar.Brand></Navbar.Brand>
            {/* <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            </Nav> */}
            
           
            
           
        </Navbar>
             
       </footer>
       </Container>
       
    )
}
