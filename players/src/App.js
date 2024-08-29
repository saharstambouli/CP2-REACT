import './App.css';
import PlayersList from './PlayersList';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <p> My Website</p>
        <div className='container'>
          <PlayersList/>
        </div>
        
      </header>
    </div>
  );
}


export default App;