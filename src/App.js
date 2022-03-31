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
    if(!placeShips.carrier){
      setPlaceShips({
        carrier:true,
        battleship:false,
        cruiser:false,
        destroyer:false
      })
    }
    
  }
  const handlePlaceBattleship = () =>{
    if(!placeShips.battleship){
      setPlaceShips({
      carrier:false,
      battleship:true,
      cruiser:false,
      destroyer:false
    })
  }
}
  const handlePlaceCruiser = () =>{
    if(!placeShips.cruiser){
      setPlaceShips({
      carrier:false,
      battleship:false,
      cruiser:true,
      destroyer:false
    })
  }
}
  const handlePlaceDestroyer = () =>{
    if(!placeShips.destroyer){
      setPlaceShips({
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
          if(board[i][j] === null || board[i][j] === "hovering" || board[i][j] === "out"){
            if(direction === "horizontal"){
              if(placeShips.carrier){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>5){
                    newBoardRow[j] = "out";
                    newBoardRow[j+1] = "out";
                    newBoardRow[j+2] = "out";
                    newBoardRow[j+3] = "out";
                  }else{
                    newBoardRow[j] = "hovering";
                    newBoardRow[j+1] = "hovering";
                    newBoardRow[j+2] = "hovering";
                    newBoardRow[j+3] = "hovering";
                    newBoardRow[j+4] = "hovering";
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(placeShips.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>6){
                    newBoardRow[j] = "out";
                    newBoardRow[j+1] = "out";
                    newBoardRow[j+2] = "out";
                  }else{
                    newBoardRow[j] = "hovering";
                    newBoardRow[j+1] = "hovering";
                    newBoardRow[j+2] = "hovering";
                    newBoardRow[j+3] = "hovering";
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(placeShips.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>7){
                    newBoardRow[j] = "out";
                    newBoardRow[j+1] = "out";
                  }else{
                    newBoardRow[j] = "hovering";
                    newBoardRow[j+1] = "hovering";
                    newBoardRow[j+2] = "hovering";
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(placeShips.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if(j>8){
                    newBoardRow[j] = "out";
                  }else{
                    newBoardRow[j] = "hovering";
                    newBoardRow[j+1] = "hovering";
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
              if(placeShips.carrier){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  if(i>5){
                    newBoard[i][j] = "out";
                    newBoard[i+1][j] = "out";
                    newBoard[i+2][j] = "out";
                    newBoard[i+3][j] = "out";
                  }else{
                    newBoard[i][j] = "hovering";
                    newBoard[i+1][j] = "hovering";
                    newBoard[i+2][j] = "hovering";
                    newBoard[i+3][j] = "hovering";
                    newBoard[i+4][j] = "hovering";
                  }
                  // newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(placeShips.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  if(i>6){
                    newBoard[i][j] = "out";
                    newBoard[i+1][j] = "out";
                    newBoard[i+2][j] = "out";
                  }else{
                    newBoard[i][j] = "hovering";
                    newBoard[i+1][j] = "hovering";
                    newBoard[i+2][j] = "hovering";
                    newBoard[i+3][j] = "hovering";
                  }
                  // newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(placeShips.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  if(i>7){
                    newBoard[i][j] = "out";
                    newBoard[i+1][j] = "out";
                  }else{
                    newBoard[i][j] = "hovering";
                    newBoard[i+1][j] = "hovering";
                    newBoard[i+2][j] = "hovering";
                  }
                  // newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(placeShips.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  if(i>8){
                    newBoard[i][j] = "out";
                  }else{
                    newBoard[i][j] = "hovering";
                    newBoard[i+1][j] = "hovering";
                  }
                  // newBoard[i] = newBoardRow;
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
          if(board[i][j] === "hovering" || board[i][j] === "out"){
            if(direction === "horizontal"){
              if(placeShips.carrier){
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
              }else if(placeShips.battleship){
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
              }else if(placeShips.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  newBoardRow[j] = null;
                  newBoardRow[j+1] = null;
                  newBoardRow[j+2] = null;
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(placeShips.destroyer){
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
              if(placeShips.carrier){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  newBoard[i+3][j] = null;
                  newBoard[i+4][j] = null;
                  return newBoard;
                })
              }else if(placeShips.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  newBoard[i+3][j] = null;
                  return newBoard;
                })
              }else if(placeShips.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  return newBoard;
                })
              }else if(placeShips.destroyer){
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
        colArray.push(
          <div style = {{border : "1px solid", width: '3vw', height: '3vw', display: 'flex'}} onMouseEnter = {handleHover} onMouseLeave={handleHoverLeft}>
            {board[i][j] === 'hovering' ? <div style={{ width: '3vw', height: '3vw',backgroundColor:'lightgrey'}} /> : null}
            {board[i][j] === 'out' ? <div style={{ width: '3vw', height: '3vw',backgroundColor:'red'}} /> : null}
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
