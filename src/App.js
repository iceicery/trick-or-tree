import { useState, React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import ChampionMap from './component/ChampionMap/ChampionMap';
import CodeEnter from './component/CodeEnter/CodeEnter';
import Home from './component/Home/Home';
import TreeHunt from './component/TreeHunt/TreeHunt';

function App() {
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  function toggleTips() {
    setIsTipsOpen(!isTipsOpen);
  }

  function toggleMap() {
    setIsMapOpen(!isMapOpen);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/champion-map">
            <ChampionMap />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/code-enter">
            <CodeEnter
              isTipsOpen={isTipsOpen}
              toggleTips={toggleTips}
              isMapOpen={isMapOpen}
              toggleMap={toggleMap}
            />
          </Route>
          <Route path="/treehunt">
            <TreeHunt
              toggleTips={toggleTips}
              isTipsOpen={isTipsOpen}
              isMapOpen={isMapOpen}
              toggleMap={toggleMap}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
