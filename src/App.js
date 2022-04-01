import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var row = [];
  for(let i = 0; i< 15; i++){
    var col = [];
    for(let j=0; j< 10 ; j++){
      col.push(null)
    }
    row.push(col);
  }
  const [direction, setDirection] = useState("horizontal")
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
  const handleChangeDirection = () =>{
    direction === "vertical"? setDirection("horizontal"):setDirection("vertical");
  }
  const handlePlaceCarrier = () =>{
    if(!pickShip.carrier){
      setPickShip({
        carrier:true,
        battleship:false,
        cruiser:false,
        destroyer:false
      })
    }
    
  }
  const handlePlaceBattleship = () =>{
    if(!pickShip.battleship){
      setPickShip({
      carrier:false,
      battleship:true,
      cruiser:false,
      destroyer:false
    })
  }
}
  const handlePlaceCruiser = () =>{
    if(!pickShip.cruiser){
      setPickShip({
      carrier:false,
      battleship:false,
      cruiser:true,
      destroyer:false
    })
  }
}
  const handlePlaceDestroyer = () =>{
    if(!pickShip.destroyer){
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
        const handleHover = () =>{
          if(board[i][j] === null || board[i][j] === "hovering" || board[i][j] === "out" || board[i][j] === 'carrier'||board[i][j] === 'battleship'||board[i][j] === 'cruiser'||board[i][j] === 'destroyer'){
            if(direction === "horizontal"){
              if(pickShip.carrier){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>5){
                    newBoardRow[j] = "out";
                    newBoardRow[j+1] = "out";
                    newBoardRow[j+2] = "out";
                    newBoardRow[j+3] = "out";
                  }else{
                    newBoardRow[j] = "carrier";
                    newBoardRow[j+1] = "carrier";
                    newBoardRow[j+2] = "carrier";
                    newBoardRow[j+3] = "carrier";
                    newBoardRow[j+4] = "carrier";
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>6){
                    newBoardRow[j] = "out";
                    newBoardRow[j+1] = "out";
                    newBoardRow[j+2] = "out";
                  }else{
                    newBoardRow[j] = "battleship";
                    newBoardRow[j+1] = "battleship";
                    newBoardRow[j+2] = "battleship";
                    newBoardRow[j+3] = "battleship";
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>7){
                    newBoardRow[j] = "out";
                    newBoardRow[j+1] = "out";
                  }else{
                    newBoardRow[j] = "cruiser";
                    newBoardRow[j+1] = "cruiser";
                    newBoardRow[j+2] = "cruiser";
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>8){
                    newBoardRow[j] = "out";
                  }else{
                    newBoardRow[j] = "destroyer";
                    newBoardRow[j+1] = "destroyer";
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else{
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = "hovering";
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }
            }else if(direction === "vertical"){
              if(pickShip.carrier){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  let newBoardRow1 = [...newBoard[i]]
                  let newBoardRow2 = [...newBoard[i+1]]
                  let newBoardRow3 = [...newBoard[i+2]]
                  let newBoardRow4 = [...newBoard[i+3]]
                  let newBoardRow5 = [...newBoard[i+4]]
                  if(i>5){
                    newBoardRow1[j] = "out";
                    newBoardRow2[j] = "out";
                    newBoardRow3[j] = "out";
                    newBoardRow4[j] = "out";
                  }else{
                    newBoardRow1[j] = "carrier";
                    newBoardRow2[j] = "carrier";
                    newBoardRow3[j] = "carrier";
                    newBoardRow4[j] = "carrier";
                    newBoardRow5[j] = "carrier";
                  }
                  
                  newBoard[i] = newBoardRow1;
                  newBoard[i+1] = newBoardRow2;
                  newBoard[i+2] = newBoardRow3;
                  newBoard[i+3] = newBoardRow4;
                  newBoard[i+4] = newBoardRow5;
                  return newBoard;
                })
              }else if(pickShip.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  let newBoardRow1 = [...newBoard[i]]
                  let newBoardRow2 = [...newBoard[i+1]]
                  let newBoardRow3 = [...newBoard[i+2]]
                  let newBoardRow4 = [...newBoard[i+3]]
                  if(i>6){
                    newBoardRow1[j] = "out";
                    newBoardRow2[j] = "out";
                    newBoardRow3[j] = "out";
                  }else{
                    newBoardRow1[j] = "battleship";
                    newBoardRow2[j] = "battleship";
                    newBoardRow3[j] = "battleship";
                    newBoardRow4[j] = "battleship";
                  }
                  
                  newBoard[i] = newBoardRow1;
                  newBoard[i+1] = newBoardRow2;
                  newBoard[i+2] = newBoardRow3;
                  newBoard[i+3] = newBoardRow4;
                  return newBoard;
                })
              }else if(pickShip.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  let newBoardRow1 = [...newBoard[i]]
                  let newBoardRow2 = [...newBoard[i+1]]
                  let newBoardRow3 = [...newBoard[i+2]]
                  if(i>7){
                    newBoardRow1[j] = "out";
                    newBoardRow2[j] = "out";
                  }else{
                    newBoardRow1[j] = "cruiser";
                    newBoardRow2[j] = "cruiser";
                    newBoardRow3[j] = "cruiser";
                  }
                  
                  newBoard[i] = newBoardRow1;
                  newBoard[i+1] = newBoardRow2;
                  newBoard[i+2] = newBoardRow3;
                  return newBoard;
                })
              }else if(pickShip.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  let newBoardRow1 = [...newBoard[i]]
                  let newBoardRow2 = [...newBoard[i+1]]
                  if(i>8){
                    newBoardRow1[j] = "out";
                  }else{
                    newBoardRow1[j] = "destroyer";
                    newBoardRow2[j] = "destroyer";
                  }
                  newBoard[i] = newBoardRow1;
                  newBoard[i+1] = newBoardRow2;
                  return newBoard;
                })
              }else{
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = "hovering";
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }
            }
          }
          
        }
        const handleHoverLeft = () => {
          if(board[i][j] === 'carrier'||board[i][j] === 'battleship'||board[i][j] === 'cruiser'||board[i][j] === 'destroyer'||board[i][j] === "hovering" || board[i][j] === "out"){
            if(direction === "horizontal"){
              if(pickShip.carrier){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = null;
                  newBoardRow[j+1] = null;
                  newBoardRow[j+2] = null;
                  newBoardRow[j+3] = null;
                  newBoardRow[j+4] = null;
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = null;
                  newBoardRow[j+1] = null;
                  newBoardRow[j+2] = null;
                  newBoardRow[j+3] = null;
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = null;
                  newBoardRow[j+1] = null;
                  newBoardRow[j+2] = null;
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = null;
                  newBoardRow[j+1] = null;
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }
              else{
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = null;
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }
            }else if(direction === "vertical"){
              if(pickShip.carrier){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  newBoard[i+3][j] = null;
                  newBoard[i+4][j] = null;
                  return newBoard;
                })
              }else if(pickShip.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  newBoard[i+3][j] = null;
                  return newBoard;
                })
              }else if(pickShip.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  return newBoard;
                })
              }else if(pickShip.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  return newBoard;
                })
              }
              else{
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = null;
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }
            }
            
          }
          
        }
        const handlePlaceShip = () => {
          if(board[i][j] !== null){
            
            setBoard(prevBoard => {
              const newBoard = [...prevBoard];
              for(let x = 0; x<10; x++){
                for(let y = 0; y<10; y++){
                  if(newBoard[x][y] ==="carrier" && !placeShips.carrier){
                    newBoard[x][y] = "placedCarrier";
                    setPlaceShips({...placeShips, carrier : true})
                  }else if(newBoard[x][y] ==="battleship"){
                    newBoard[x][y] = "battleship";
                  }
                }
              }
              return newBoard
            })
          }
        }
        colArray.push(
          <div style = {{border : "1px solid", width: '3vw', height: '3vw', display: 'flex'}} onMouseEnter = {handleHover} onMouseLeave={handleHoverLeft} onClick={handlePlaceShip}>
            {board[i][j] === 'carrier'||board[i][j] === 'battleship'||board[i][j] === 'cruiser'||board[i][j] === 'destroyer'||board[i][j] === 'hovering' ? <div style={{ width: '3vw', height: '3vw',backgroundColor:'lightgreen'}} /> : null}
            {board[i][j] === 'out' ? <div style={{ width: '3vw', height: '3vw',backgroundColor:'red'}} /> : null}
            {board[i][j] === 'placedCarrier'||board[i][j] === 'placedBattleship'||board[i][j] === 'placedCruiser'||board[i][j] === 'placedDestroyer' ? <div style={{ width: '3vw', height: '3vw',backgroundColor:'black'}} /> : null}
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
          <button onClick={handlePlaceCarrier}> carrier </button>
          <button onClick={handlePlaceBattleship}> battleship </button>
          <button onClick={handlePlaceCruiser}> cruiser </button>
          <button onClick={handlePlaceDestroyer}> destroyer </button>
          <button onClick={handleChangeDirection}>{direction === "vertical"?<div>Vertical</div>:<div>Horizontal</div>}</button>
        </div>
        <div style = {{  marginLeft : "20vw"}}>
          <div>opponents board</div>
          <div>{renderOpponentsGrid()}</div> 
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
