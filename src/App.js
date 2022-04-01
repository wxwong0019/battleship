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
  const [gameStart, setGameStart] = useState(false)
  const [board, setBoard] = useState(row)
  
  const handleChangeDirection = () =>{
    direction === "vertical"? setDirection("horizontal"):setDirection("vertical");
  }
  const handlePlaceCarrier = () =>{
    if(!pickShip.carrier && !placeShips.carrier){
      setPickShip({
        carrier:true,
        battleship:false,
        cruiser:false,
        destroyer:false
      })
    }
    
  }
  const handlePlaceBattleship = () =>{
    if(!pickShip.battleship && !placeShips.battleship){
      setPickShip({
      carrier:false,
      battleship:true,
      cruiser:false,
      destroyer:false
    })
  }
}
  const handlePlaceCruiser = () =>{
    if(!pickShip.cruiser && !placeShips.cruiser){
      setPickShip({
      carrier:false,
      battleship:false,
      cruiser:true,
      destroyer:false
    })
  }
}
  const handlePlaceDestroyer = () =>{
    if(!pickShip.destroyer && !placeShips.destroyer){
      setPickShip({
      carrier:false,
      battleship:false,
      cruiser:false,
      destroyer:true
    })
  }
}
  const checkToBeStarted = () =>{
    if(!gameStart && placeShips.carrier && placeShips.battleship && placeShips.cruiser && placeShips.destroyer){
      setGameStart(true)
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')|| (typeof board[i][j+2] === "string" && board[i][j+2].charAt(0) === 'p')|| (typeof board[i][j+3] === "string" && board[i][j+3].charAt(0) === 'p')|| (typeof board[i][j+4] === "string" && board[i][j+4].charAt(0) === 'p')){
                    if(newBoardRow[j] === null || typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = "out"  ;
                    if(newBoardRow[j+1] === null || typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = "out";
                    if(newBoardRow[j+2] === null || typeof newBoardRow[j+2] === "string" && newBoardRow[j+2].charAt(0) !== 'p') newBoardRow[j+2] = "out";
                    if(newBoardRow[j+3] === null || typeof newBoardRow[j+3] === "string" && newBoardRow[j+3].charAt(0) !== 'p') newBoardRow[j+3] = "out";
                    if(newBoardRow[j+4] === null || typeof newBoardRow[j+4] === "string" && newBoardRow[j+4].charAt(0) !== 'p') newBoardRow[j+4] = "out";
                  }
                  else if(j>5 ){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')|| (typeof board[i][j+2] === "string" && board[i][j+2].charAt(0) === 'p')|| (typeof board[i][j+3] === "string" && board[i][j+3].charAt(0) === 'p')){
                    if(newBoardRow[j] === null || typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = "out"  ;
                    if(newBoardRow[j+1] === null || typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = "out";
                    if(newBoardRow[j+2] === null || typeof newBoardRow[j+2] === "string" && newBoardRow[j+2].charAt(0) !== 'p') newBoardRow[j+2] = "out";
                    if(newBoardRow[j+3] === null || typeof newBoardRow[j+3] === "string" && newBoardRow[j+3].charAt(0) !== 'p') newBoardRow[j+3] = "out";
                  }
                  else if(j>6){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')|| (typeof board[i][j+2] === "string" && board[i][j+2].charAt(0) === 'p')){
                    if(newBoardRow[j] === null || typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = "out"  ;
                    if(newBoardRow[j+1] === null || typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = "out";
                    if(newBoardRow[j+2] === null || typeof newBoardRow[j+2] === "string" && newBoardRow[j+2].charAt(0) !== 'p') newBoardRow[j+2] = "out";
                  }
                  else if(j>7){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')){
                    if(newBoardRow[j] === null || typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = "out"  ;
                    if(newBoardRow[j+1] === null || typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = "out";
                  }
                  else if(j>8){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')|| (typeof board[i+2][j] === "string" && board[i+2][j].charAt(0) === 'p')|| (typeof board[i+3][j] === "string" && board[i+3][j].charAt(0) === 'p')|| (typeof board[i+4][j] === "string" && board[i+4][j].charAt(0) === 'p')){
                    if(newBoardRow1[j] === null || typeof newBoardRow1[j] === "string" && newBoardRow1[j].charAt(0) !== 'p') newBoardRow1[j] = "out"  ;
                    if(newBoardRow2[j] === null || typeof newBoardRow2[j] === "string" && newBoardRow2[j].charAt(0) !== 'p') newBoardRow2[j] = "out";
                    if(newBoardRow3[j] === null || typeof newBoardRow3[j] === "string" && newBoardRow3[j].charAt(0) !== 'p') newBoardRow3[j] = "out";
                    if(newBoardRow4[j] === null || typeof newBoardRow4[j] === "string" && newBoardRow4[j].charAt(0) !== 'p') newBoardRow4[j] = "out";
                    if(newBoardRow5[j] === null || typeof newBoardRow5[j] === "string" && newBoardRow5[j].charAt(0) !== 'p') newBoardRow5[j] = "out";
                  }
                  else if(i>5){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')|| (typeof board[i+2][j] === "string" && board[i+2][j].charAt(0) === 'p')|| (typeof board[i+3][j] === "string" && board[i+3][j].charAt(0) === 'p')){
                    if(newBoardRow1[j] === null || typeof newBoardRow1[j] === "string" && newBoardRow1[j].charAt(0) !== 'p') newBoardRow1[j] = "out"  ;
                    if(newBoardRow2[j] === null || typeof newBoardRow2[j] === "string" && newBoardRow2[j].charAt(0) !== 'p') newBoardRow2[j] = "out";
                    if(newBoardRow3[j] === null || typeof newBoardRow3[j] === "string" && newBoardRow3[j].charAt(0) !== 'p') newBoardRow3[j] = "out";
                    if(newBoardRow4[j] === null || typeof newBoardRow4[j] === "string" && newBoardRow4[j].charAt(0) !== 'p') newBoardRow4[j] = "out";
                  }
                  else if(i>6){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')|| (typeof board[i+2][j] === "string" && board[i+2][j].charAt(0) === 'p')){
                    if(newBoardRow1[j] === null || typeof newBoardRow1[j] === "string" && newBoardRow1[j].charAt(0) !== 'p') newBoardRow1[j] = "out"  ;
                    if(newBoardRow2[j] === null || typeof newBoardRow2[j] === "string" && newBoardRow2[j].charAt(0) !== 'p') newBoardRow2[j] = "out";
                    if(newBoardRow3[j] === null || typeof newBoardRow3[j] === "string" && newBoardRow3[j].charAt(0) !== 'p') newBoardRow3[j] = "out";
                  }
                  else if(i>7){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')){
                    if(newBoardRow1[j] === null || typeof newBoardRow1[j] === "string" && newBoardRow1[j].charAt(0) !== 'p') newBoardRow1[j] = "out"  ;
                    if(newBoardRow2[j] === null || typeof newBoardRow2[j] === "string" && newBoardRow2[j].charAt(0) !== 'p') newBoardRow2[j] = "out";
                  }
                  else if(i>8){
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')|| (typeof board[i][j+2] === "string" && board[i][j+2].charAt(0) === 'p')|| (typeof board[i][j+3] === "string" && board[i][j+3].charAt(0) === 'p')|| (typeof board[i][j+4] === "string" && board[i][j+4].charAt(0) === 'p')){
                    if(typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = null  ;
                    if(typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = null;
                    if(typeof newBoardRow[j+2] === "string" && newBoardRow[j+2].charAt(0) !== 'p') newBoardRow[j+2] = null;
                    if(typeof newBoardRow[j+3] === "string" && newBoardRow[j+3].charAt(0) !== 'p') newBoardRow[j+3] = null;
                    if(typeof newBoardRow[j+4] === "string" && newBoardRow[j+4].charAt(0) !== 'p') newBoardRow[j+4] = null;
                  }else{
                    newBoardRow[j] = null;
                    newBoardRow[j+1] = null;
                    newBoardRow[j+2] = null;
                    newBoardRow[j+3] = null;
                    newBoardRow[j+4] = null;
                  }
                  
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')|| (typeof board[i][j+2] === "string" && board[i][j+2].charAt(0) === 'p')|| (typeof board[i][j+3] === "string" && board[i][j+3].charAt(0) === 'p')){
                    if(typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = null  ;
                    if(typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = null;
                    if(typeof newBoardRow[j+2] === "string" && newBoardRow[j+2].charAt(0) !== 'p') newBoardRow[j+2] = null;
                    if(typeof newBoardRow[j+3] === "string" && newBoardRow[j+3].charAt(0) !== 'p') newBoardRow[j+3] = null;
                  }else{
                    newBoardRow[j] = null;
                    newBoardRow[j+1] = null;
                    newBoardRow[j+2] = null;
                    newBoardRow[j+3] = null;
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')|| (typeof board[i][j+2] === "string" && board[i][j+2].charAt(0) === 'p')){
                    if(typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = null  ;
                    if(typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = null;
                    if(typeof newBoardRow[j+2] === "string" && newBoardRow[j+2].charAt(0) !== 'p') newBoardRow[j+2] = null;
                  }else{
                    newBoardRow[j] = null;
                    newBoardRow[j+1] = null;
                    newBoardRow[j+2] = null;
                  }
                  newBoard[i] = newBoardRow;
                  return newBoard;
                })
              }else if(pickShip.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  const newBoardRow = [...newBoard[i]];
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i][j+1] === "string" && board[i][j+1].charAt(0) === 'p')){
                    if(typeof newBoardRow[j] === "string" && newBoardRow[j].charAt(0) !== 'p') newBoardRow[j] = null  ;
                    if(typeof newBoardRow[j+1] === "string" && newBoardRow[j+1].charAt(0) !== 'p') newBoardRow[j+1] = null;
                  }else{
                    newBoardRow[j] = null;
                    newBoardRow[j+1] = null;
                  }
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
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')|| (typeof board[i+2][j] === "string" && board[i+2][j].charAt(0) === 'p')|| (typeof board[i+3][j] === "string" && board[i+3][j].charAt(0) === 'p')|| (typeof board[i+4][j] === "string" && board[i+4][j].charAt(0) === 'p')){
                    if(typeof newBoard[i][j] === "string" && newBoard[i][j].charAt(0) !== 'p') newBoard[i][j] = null;
                    if(typeof newBoard[i+1][j] === "string" && newBoard[i+1][j].charAt(0) !== 'p') newBoard[i+1][j] = null;
                    if(typeof newBoard[i+2][j] === "string" && newBoard[i+2][j].charAt(0) !== 'p') newBoard[i+2][j] = null;
                    if(typeof newBoard[i+3][j] === "string" && newBoard[i+3][j].charAt(0) !== 'p') newBoard[i+3][j] = null;
                    if(typeof newBoard[i+4][j] === "string" && newBoard[i+4][j].charAt(0) !== 'p') newBoard[i+4][j] = null;
                  }else{
                    newBoard[i][j] = null;
                    newBoard[i+1][j] = null;
                    newBoard[i+2][j] = null;
                    newBoard[i+3][j] = null;
                    newBoard[i+4][j] = null;
                  }
                  
                  return newBoard;
                })
              }else if(pickShip.battleship){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')|| (typeof board[i+2][j] === "string" && board[i+2][j].charAt(0) === 'p')|| (typeof board[i+3][j] === "string" && board[i+3][j].charAt(0) === 'p')){
                    if(typeof newBoard[i][j] === "string" && newBoard[i][j].charAt(0) !== 'p') newBoard[i][j] = null;
                    if(typeof newBoard[i+1][j] === "string" && newBoard[i+1][j].charAt(0) !== 'p') newBoard[i+1][j] = null;
                    if(typeof newBoard[i+2][j] === "string" && newBoard[i+2][j].charAt(0) !== 'p') newBoard[i+2][j] = null;
                    if(typeof newBoard[i+3][j] === "string" && newBoard[i+3][j].charAt(0) !== 'p') newBoard[i+3][j] = null;
                  }else{
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  newBoard[i+3][j] = null;
                  }
                  return newBoard;
                })
              }else if(pickShip.cruiser){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')|| (typeof board[i+2][j] === "string" && board[i+2][j].charAt(0) === 'p')){
                    if(typeof newBoard[i][j] === "string" && newBoard[i][j].charAt(0) !== 'p') newBoard[i][j] = null;
                    if(typeof newBoard[i+1][j] === "string" && newBoard[i+1][j].charAt(0) !== 'p') newBoard[i+1][j] = null;
                    if(typeof newBoard[i+2][j] === "string" && newBoard[i+2][j].charAt(0) !== 'p') newBoard[i+2][j] = null;
                  }else{
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  newBoard[i+2][j] = null;
                  }
                  return newBoard;
                })
              }else if(pickShip.destroyer){
                setBoard(prevBoard => {
                  const newBoard = [...prevBoard];
                  if( (typeof board[i][j] === "string" && board[i][j].charAt(0) === 'p')||(typeof board[i+1][j] === "string" && board[i+1][j].charAt(0) === 'p')){
                    if(typeof newBoard[i][j] === "string" && newBoard[i][j].charAt(0) !== 'p') newBoard[i][j] = null;
                    if(typeof newBoard[i+1][j] === "string" && newBoard[i+1][j].charAt(0) !== 'p') newBoard[i+1][j] = null;
                  }else{
                  newBoard[i][j] = null;
                  newBoard[i+1][j] = null;
                  }
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
        const handleClick = () => {
          
          if(!gameStart && board[i][j] !== null && board[i][j].charAt(0) !== 'p' ){
            if(board[i][j] === "carrier"){
              let newPickShip = {...pickShip, carrier : false}
              setPickShip(newPickShip)
              setPlaceShips(prev => {
                const newPlaceShip = {...prev, carrier:true}
                return newPlaceShip
              })
            }else if(board[i][j] === "battleship"){
              let newPickShip = {...pickShip, battleship : false}
              setPickShip(newPickShip)
              setPlaceShips(prev => {
                const newPlaceShip = {...prev, battleship:true}
                return newPlaceShip
              })
            }else if(board[i][j] === "cruiser"){
              let newPickShip = {...pickShip, cruiser : false}
              setPickShip(newPickShip)
              setPlaceShips(prev => {
                const newPlaceShip = {...prev, cruiser:true}
                return newPlaceShip
              })
            }else if(board[i][j] === "destroyer"){
              let newPickShip = {...pickShip, destroyer : false}
              setPickShip(newPickShip)
              setPlaceShips(prev => {
                const newPlaceShip = {...prev, destroyer:true}
                return newPlaceShip
              })
            }else if(gameStart && board[i][j] !== null && board[i][j].charAt(0) === 'p'){

            }
            
            setBoard(prevBoard => {
              const newBoard = [...prevBoard];
              for(let x = 0; x<10; x++){
                for(let y = 0; y<10; y++){
                  if(newBoard[x][y] ==="carrier" && !placeShips.carrier){
                    newBoard[x][y] = "placedCarrier";
                  }else if(newBoard[x][y] ==="battleship"){
                    newBoard[x][y] = "placedBattleship";
                  }else if(newBoard[x][y] ==="cruiser"){
                    newBoard[x][y] = "placedCruiser";
                  }else if(newBoard[x][y] ==="destroyer"){
                    newBoard[x][y] = "placedDestroyer";
                  }
                }
              }
              return newBoard
            })
          }
        }
        colArray.push(
          <div style = {{border : "1px solid", width: '3vw', height: '3vw', display: 'flex'}} onMouseEnter = {handleHover} onMouseLeave={handleHoverLeft} onClick={handleClick}>
            {board[i][j] === 'carrier'||board[i][j] === 'battleship'||board[i][j] === 'cruiser'||board[i][j] === 'destroyer' ? <div style={{ width: '3vw', height: '3vw',backgroundColor:'lightgreen'}} /> : null}
            {board[i][j] === 'hovering' ? <div style={{ width: '3vw', height: '3vw',backgroundColor:'lightgrey'}} /> : null}
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
      {checkToBeStarted()}
      <div style = {{ display: 'flex'}}>
        <div> 
          <div>my board</div>
          <div>{renderMyGrid()}</div>
          {
            gameStart ? 
            <div>Game Started!</div> : 
            <div>
              <button onClick={handlePlaceCarrier} disabled={placeShips.carrier}> carrier </button>
              <button onClick={handlePlaceBattleship} disabled={placeShips.battleship}> battleship </button>
              <button onClick={handlePlaceCruiser} disabled={placeShips.cruiser}> cruiser </button>
              <button onClick={handlePlaceDestroyer}disabled={placeShips.destroyer}> destroyer </button>
              <button onClick={handleChangeDirection}>{direction === "vertical"?<div>Vertical</div>:<div>Horizontal</div>}</button>
            </div>
          }
          
          
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
