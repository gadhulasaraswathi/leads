import React from 'react'
import { Col, Form, Image, Row } from 'react-bootstrap'
import './Dashboard.css'
import homeImage from '../images/babygirl.jpg'
import { Button } from 'react-bootstrap'


export default function Dashboard() {
    return (
        <div className='dashboard_background' >
            <Row>
                <Col xl={7} >
                 <span className="header">Beauty Parlor</span> 
                </Col>
               </Row>
               <Row>
                <Col xl={5} >
                    <span className='dash_text' >
                    Having quality beauty products and professional beauticians can truly grow your beauty salon business. Furthermore,a good website will even make it grow and expand. Eight Five Zero Salon has a simple, minimal yet elegant design for beauty salon. The site welcomes its visitors with big and stunning images of beautiful women displayed using the image slider. In addition, the CTAs are in good spots to generate more leads. To increase visitor’s retention to the website, it uses a fixed header so the menu will always be visible and accessible. Moreover, the trendy parallax effect greatly improves the look of the website which in turn enhances the look and feel of the site.
                    </span>
                </Col>
                <Col xl={7} >
                  <Image className='dash_image' src={homeImage} alt={homeImage} />   
                </Col>
                
            </Row>

            <Row className='dash_row2' >
                <Col xl={12} >
               
                
                </Col>
            </Row>
        </div>
    )
}
