import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Rectangle({setTankSize}) {

    const [length,setLength]=useState()
    const [width,setWidth]=useState()
    const [height,setHeight]=useState()

    function calc_tank(){
        setTankSize(parseInt(length)*parseInt(width)*parseInt(height)/1000)
    }


    return (
        <Form>
          <Form.Group className="mb-3" controlId="Length" onChange={(e)=>{setLength(e.target.value)}}>
            <Form.Label>אורך</Form.Label>
            <Form.Control type="number" placeholder="Enter Length" />
        
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="width" onChange={(e)=>{setWidth(e.target.value)}}>
            <Form.Label>רוחב</Form.Label>
            <Form.Control type="number" placeholder="Enter width" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="height" onChange={(e)=>{setHeight(e.target.value)}}>
            <Form.Label>גובה</Form.Label>
            <Form.Control type="number" placeholder="Enter height" />
          </Form.Group>
         
          <Button  onClick={calc_tank} 
        //   variant="primary" type="submit"
          >
            חשב גודל מיכל
          </Button>
        </Form>
      );
}
