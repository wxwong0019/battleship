import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var row = [];
  for(let i = 0; i< 10; i++){
    var col = [];
    for(let j=0; j< 10 ; j++){
      col.push(null)
    }
    row.push(col);
  }
  
  const [placeShips, setPlaceShips] = useState(
    {
      carrier:false,
      battleship:false,
      cruiser:false,
      destroyer:false
    })
  const [pickShip, setPickShip] = useState(
    {
      carrier:false,
      battleship:false,
      cruiser:false,
      destroyer:false
    })
  const [board, setBoard] = useState(row)
  const handlePlaceCarrier = () =>{
    if(!placeShips.carrier){
      setPickShip({
        carrier:true,
        battleship:false,
        cruiser:false,
        destroyer:false
      })
    }
    
  }
  const handlePlaceBattleship = () =>{
    if(!placeShips.battleship){
      setPickShip({
      carrier:false,
      battleship:true,
      cruiser:false,
      destroyer:false
    })
  }
}
  const handlePlaceCruiser = () =>{
    if(!placeShips.cruiser){
      setPickShip({
      carrier:false,
      battleship:false,
      cruiser:true,
      destroyer:false
    })
  }
}
  const handlePlaceDestroyer = () =>{
    if(!placeShips.destroyer){
      setPickShip({
      carrier:false,
      battleship:false,
      cruiser:false,
      destroyer:true
    })
  }
}
  const renderMyGrid = () => {
    var rowArray = [];
    for(let i = 0; i< 10; i++){
      var colArray = [];
      for(let j=0; j< 10 ; j++){
        colArray.push(
          <div style = {{border : "1px solid", width: '3vw', height: '3vw', display: 'flex'}}>
          
          </div>
        )
      }
      rowArray.push(
        <div style = {{ display: 'flex'}}>
            {colArray}
          </div>
      )
    }
    return rowArray;
  }
  const renderOpponentsGrid = () => {
    var rowArray = [];
    for(let i = 0; i< 10; i++){
      var colArray = [];
      for(let j=0; j< 10 ; j++){
        colArray.push(
          <div style = {{border : "1px solid", width: '3vw', height: '3vw', display: 'flex'}}>
            
          </div>
        )
      }
      rowArray.push(
        <div style = {{ display: 'flex'}}>
            {colArray}
          </div>
      )
    }
    return rowArray;
  }
  return (
    <div className="App" >
      {console.log(board)}
      <div style = {{ display: 'flex'}}>
        <div> 
          <div>my board</div>
          <div>{renderMyGrid()}</div>
          <div onClick={handlePlaceCarrier}> carrier </div>
          <div onClick={handlePlaceBattleship}> battleship </div>
          <div onClick={handlePlaceCruiser}> cruiser </div>
          <div onClick={handlePlaceDestroyer}> destroyer </div>
        </div>
        <div style = {{  marginLeft : "20vw"}}>
          <div>opponents board</div>
          <div>{renderOpponentsGrid()}</div> 
          <div> carrier </div>
          <div> battleship </div>
          <div> cruiser </div>
          <div> destroyer </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
