import { useState } from 'react';
import './App.css';
import About from './component/About/About';
import ChampionMap from './component/ChampionMap/ChampionMap';
import CodeEnter from './component/CodeEnter/CodeEnter';
import Home from './component/Home/Home';
import Tips from './component/Tips/Tips';

function App() {
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  function toggleTips() {
    setIsTipsOpen(!isTipsOpen);
    console.log('click');
  }

  return (
    <div className="App">
      <Home />
      <ChampionMap />
      <About />
      <CodeEnter isTipsOpen={isTipsOpen} toggleTips={toggleTips} />
      <Tips />
    </div>
  );
}

export default App;
