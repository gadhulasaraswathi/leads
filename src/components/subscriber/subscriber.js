import React,{useEffect, useState} from 'react'
import { ButtonGroup, Col, Container, Row, ToggleButton } from 'react-bootstrap';
import './subscriber.css'
import plandata from '../../data/plan.json'

export default function Subscriber() {
   
    const [checkedData, setCheckedData] = useState([]);

    useEffect(()=>{

        setCheckedData(
            
              plandata.plan
              
            
             
             
        )
        
       
         }, [])
         console.log(checkedData)

    
     return (
        <Container>
            <Row>
                <Col className="button">
     <ButtonGroup toggle className="mb-2 ">
         {
             checkedData.map((p)=>(
                    <ToggleButton
                    type="checkbox"
                    className="toggle_button"
                    variant="secondary"
                    checked={checkedData}
                    value="1"
                    onChange={(e) => setCheckedData(e.currentTarget.checked)}
                    
                >
               {
                   
                  `${p.name}  Rs ${p.amount}`
              
               }
              </ToggleButton>
               ))

            
         }
        
      </ButtonGroup>
                
                </Col>
           
            </Row>
        </Container>
            
      
        
    )
}
