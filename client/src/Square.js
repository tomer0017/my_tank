import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Square({setTankSize}) {
    const [length,setLength]=useState()
    

    function calc_tank(){
        setTankSize(parseInt(length)*parseInt(length)*parseInt(length)/1000)
    }

    return (
        <Form>
          <Form.Group className="mb-3" controlId="Length" onChange={(e)=>{setLength(e.target.value)}}>
            <Form.Label>אורך/רוחב/גובה</Form.Label>
            <Form.Control type="number" placeholder="Enter Length" />
        
          </Form.Group>
    
         
          <Button  type="button" onClick={calc_tank} 
     
          >
            חשב גודל מיכל
          </Button>
        </Form>
      );
}
