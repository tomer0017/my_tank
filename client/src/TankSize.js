
import TankShape from './TankShape';
import Panoramic from './Panoramic';
import Square from './Square';
import Rectangle from './Rectangle';
import React,{useState} from 'react';

export default function TankSize({setTankSize,shape,setShape}) {
    
    
  return (
    <div>
        <h3> נתוני האקווריום</h3>
        <TankShape setShape={setShape} shape={shape}/>
        
        
        {shape==="ריבוע"&&<Square  setTankSize={setTankSize}/>}
        {shape==="מלבן"&&<Rectangle  setTankSize={setTankSize}/>}
        {shape==="פנורמי"&&<Panoramic  setTankSize={setTankSize}/>}

    </div>
  )
}
