import './App.css';
import About from './component/About/About';
import ChampionMap from './component/ChampionMap/ChampionMap';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <ChampionMap />
      <About />
    </div>
  );
}

export default App;
