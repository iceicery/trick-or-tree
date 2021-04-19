import { useState, React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import ChampionMap from './component/ChampionMap/ChampionMap';
import CodeEnter from './component/CodeEnter/CodeEnter';
import Home from './component/Home/Home';
import TreeHunt from './component/TreeHunt/TreeHunt';
import TreeHuntMap from './component/TreeHuntMap/TreeHuntMap';

function App() {
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  function toggleTips() {
    setIsTipsOpen(!isTipsOpen);
    console.log('click');
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
            <TreeHuntMap />
          </Route>
          <Route path="/champion-map">
            <ChampionMap />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/code-enter">
            <CodeEnter isTipsOpen={isTipsOpen} toggleTips={toggleTips} />
          </Route>
          <Route path="/treehunt">
            <TreeHunt toggleTips={toggleTips} isTipsOpen={isTipsOpen} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
