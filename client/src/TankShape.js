// import Form from 'react-bootstrap/Form';
import React from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
function TankShape({setShape,shape}) {


    const handleSelect=(e)=>{
        console.log(e);
        setShape(e)
      }
  return (
    <>
    <DropdownButton
    // alignRight
    title="בחר צורת אקווריום"
    id="dropdown-menu-align-right"
    onSelect={handleSelect}
      >
            <Dropdown.Item eventKey="ריבוע">ריבוע</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="מלבן">מלבן</Dropdown.Item>
            {/* <Dropdown.Divider />
            <Dropdown.Item eventKey="פנורמי">פנורמי</Dropdown.Item> */}
    </DropdownButton>

 
</>
  );
}

export default TankShape;