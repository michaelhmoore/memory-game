import './App.css';
import MemoryCard from './components/MemoryCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Memory Game</h1>
       <h2>Match the cards to win!</h2>
      </header>
      <MemoryCard />
    </div>
  );
}

export default App;
