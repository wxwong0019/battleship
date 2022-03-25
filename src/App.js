import logo from './logo.svg';
import './App.css';

function App() {
  const renderMyGrid = () => {
    var rowArray = [];
    for(let i = 0; i< 10; i++){
      var colArray = [];
      for(let j=0; j< 10 ; j++){
        colArray.push(
          <div style = {{border : "1px solid", width: '3vw', height: '3vw', display: 'flex'}}>
            {/* <div style={{ borderRadius: "50%", backgroundColor: 'white', display: 'flex', width: '70%', height: '70%', marginLeft: '10px', marginTop: '10px', padding: 1 }}>
            </div> */}
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
        <div style = {{ display: 'flex', marginLeft : "20vw"}}>
            {colArray}
          </div>
      )
    }
    return rowArray;
  }
  return (
    <div className="App" >

      <div style = {{ display: 'flex'}}>
        <div> 
          <div>my board</div>
          <div>{renderMyGrid()}</div>
        </div>
        <div>
          <div>opponents board</div>
          <div>{renderOpponentsGrid()}</div>  
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
