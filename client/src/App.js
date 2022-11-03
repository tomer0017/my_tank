import './App.css';
import Button from 'react-bootstrap/Button';
import { usePopup } from 'react-hook-popup';
import { PopupProvider } from 'react-hook-popup';
import Popupbox from './Popupbox';

import TankSize from './TankSize';
import React,{ useEffect,useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TankShapeImage from './TankShapeImage';
import FishCard from './FishCard';

function App() {
  const axios = require('axios').default;
  const [tankSize,setTankSize]=useState('')
  const [shape,setShape]=useState('');
  const [data, setData] = useState([]);
  const[myFish,setMyFish]=useState([]);
  const[myFishType,setMyFishType]=useState(['malawi','american','noy','lobster','livealone'])
  const [fishDictionary, setFishDictionary] = useState([]);
  const [showPopup, hidePopup] = usePopup('popup', ({ message, handleClose }) => (
    <div className="modal">
        {message}
        <button onClick={handleClose}>
            Close this modal
        </button>
    </div>
));
 


  useEffect(() => {
    axios.get("/api2", {
      params: {
        minsize: tankSize,
        neighbors:myFishType,
      },
    }).then((response) => {
      setData(response.data);

    });

   
  }, []);
  

  useEffect(() => {
    axios.get("/api", {
      params: {
        minsize: tankSize,
        neighbors:myFishType,
      },
    }).then((response) => {
      setData(response.data);
    });
  }, [myFishType,tankSize,myFish]);


  function showFishList(){
    console.log(fishDictionary)
  }

  function clearAquarium(){
    setFishDictionary([])
    setMyFish('')
    setMyFishType(['malawi','american','noy','lobster','livealone'])
    const x = document.getElementById('header').innerHTML='';
    // if(x!=null)
    // for(var i=0;i<x.length;i++){
    //   x[i].outerHTML="";
    // }
      

  }

  function addFish(imgSrc,name,place,key){
    var img = document.createElement("img");
    img.src=imgSrc;
    img.id=name;
    img.classList.add('fish');
    var src = document.getElementById("header");
    if(place=="d"){
      var num="87%"
    }
    else var num=Math.floor((Math.random() * 82) + 1)+'%';
    img.style.top= num;
    // num=Math.floor((Math.random() * 15) + 8)+'%';גודל ה דג  
    // img.style.width= num;
    num=Math.floor((Math.random() * 20) + 10);
    
    img.style.animation='animateFish '+num+"s linear infinite";
    // alert(num);
    
    
    src.appendChild(img);
      
}

function removeFish(fishName){
  const x = document.getElementById(fishName);
  if(x!=null)
      x.outerHTML="";
  // else console.log("no fish")    
}


  return (
     
      

    <div className="App"> 
    {/* <button onClick={()=>test2()} >test22</button> */}
    <div className='top_header'>
      <Row style={{    'paddingTop':'53px'}}>
        <Col md={4} ></Col>
        <Col md={4} ><h1 style={{'color': '#0196ff'}} >מערכת איכלוס אקווריומים</h1></Col>
        <Col md={4} ><img className='logo' src="http://www.uploads.co.il/uploads/images/375422533.png"  /></Col>
      </Row>
        
    </div>
     
      <Container>
       
      <div >
       
        <div className='Tanksizebox'>
          <div className='fish_calculator'  >
           <Row>
          
          <Col> <TankShapeImage shape={shape}/> </Col>
          <Col className='rightTankSize' md={6}> <TankSize setTankSize={setTankSize} setShape={setShape} shape={shape}/></Col>
          
        </Row>
        </div>
        {tankSize&&<h4 className='aquarium_params'> {tankSize} L האקווריום בצורת {shape} מכיל</h4>}

          {/* aquarium tank animation */}
          <Row>
            <Col md={2}></Col>
            <Col md={8}>{tankSize&&<div style={{height: shape==="ריבוע"?'500px':'350px'}} className='water'>
           <div id="header">  
          

           </div>
          </div>}</Col>
            <Col md={2}>
         
            </Col>
           
          </Row>
         
        <Button onClick={()=>clearAquarium()} >נקה דגים מהמיכל</Button>

        <Row>

        
        {data && data.map((item,index)=>
        
        <Col md={4}>
          
        <FishCard  setFishDictionary={setFishDictionary} fishDictionary={fishDictionary} myFishType={myFishType} setMyFishType={setMyFishType} removeFish={removeFish} myFish={myFish} setMyFish={setMyFish}  addFish={addFish} fishProfile={item} key={index} />
        </Col>
        )}

        {myFish.length>0&&data==''&& <h3 style={{'color':'red'}} >אין אפשרות להכניס דגים נוספים</h3>}
       </Row>
        </div>
       
       
        
        
      </div>
    </Container>
    <img onClick={showFishList} className='sticky'  src="http://www.uploads.co.il/uploads/images/706513459.png" /> 
{/*     
     <button onClick={() => showPopup('I am a modal!')}>
    Show the modal
</button>

<Popupbox></Popupbox> */}
    </div>
     
  

    
  );
}

export default App;
