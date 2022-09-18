import React,{useEffect,useState} from 'react'

export default function TankShapeImage({shape}) {
    const [currentShape,setCurrentShape]=useState("")
    let cubeImage="https://uploads-cdn.omnicalculator.com/images/aquarium/cube-calc.png"
    let retangleImage="https://uploads-cdn.omnicalculator.com/images/aquarium/box-calc.png"

useEffect(()=>{
if(shape==="ריבוע")setCurrentShape("https://uploads-cdn.omnicalculator.com/images/aquarium/cube-calc.png");
else if(shape==="מלבן")setCurrentShape("https://uploads-cdn.omnicalculator.com/images/aquarium/box-calc.png");
else if(shape==="פנורמי")setCurrentShape("https://uploads-cdn.omnicalculator.com/images/aquarium/bowfront-calc.png");

},[shape])

  return (
    <div>
        <img src={currentShape}></img>

    </div>
  )
}
