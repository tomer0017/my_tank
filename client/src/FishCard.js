import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

export default function FishCard({fishDictionary,setFishDictionary,myFishType,removeFish,fishProfile,addFish,myFish,setMyFish,setMyFishType}) {


    function addToDictionary(){
        let flag_exists=false

        for(let i=0;i<fishDictionary.length;i++){
        if(fishDictionary[i]['name']==fishProfile.name){
            flag_exists=true
            fishDictionary[i]["count"]=fishDictionary[i]["count"]+1
            }
        }

        if(!flag_exists) setFishDictionary([...fishDictionary,{name:fishProfile.name,count:1,neighbors:[fishProfile.Neighbors]}]);

      }



      function checkNeighbors(){
        let fishNeighbors=['malawi','american','noy','lobster','livealone']
       
        for(let i=0;i<fishDictionary.length;i++){
            if(fishDictionary[i]['count']>0){
                console.log(fishDictionary[i]['neighbors'])
                console.log(fishNeighbors)
                 fishNeighbors=  fishNeighbors.filter(value => fishDictionary[i]['neighbors'][0].includes(value))
                 console.log(fishNeighbors)
            }
      }
      setMyFishType(fishNeighbors)
    }

    


    
    function newFish(){
        addFish(fishProfile.fish_png,fishProfile.name,fishProfile.place)
        setMyFish(oldArray => [...oldArray,fishProfile])
        addToDictionary()

        if(myFish.length==0)setMyFishType(fishProfile.Neighbors)

            else {
                
                let try1=  myFishType.filter(value => fishProfile.Neighbors.includes(value))

                setMyFishType(try1)

            }
    }


    function removeFish2(name){
        removeFish(name)
        for(let i=0;i<fishDictionary.length;i++){
            if(fishDictionary[i]['name']==fishProfile.name){
                if(fishDictionary[i]['count']>1)
                {
                fishDictionary[i]["count"]=fishDictionary[i]["count"]-1
                }

                else
                {
                    fishDictionary[i]["count"]=0
                }
            }

        }
         checkNeighbors()
    }


  return (
    
    <div className='fish_card'> 
    <img   width={"200px"} src={fishProfile.fish_img} />
    <h3 className='fish_name'>
        <Row>
            <Col md={4}><h2 className='add_rem_fish_btn' onClick={()=>newFish()} >+</h2></Col>
            <Col md={4}> <h4>{fishProfile.name}</h4></Col>
            <Col md={4}><h2 className='add_rem_fish_btn' onClick={()=>removeFish2(fishProfile.name)}>-</h2></Col>
        </Row>
       
        </h3>
    
    </div>
  )
}
