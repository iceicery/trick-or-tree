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
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [tree, setTree] = useState({});

  function handleTree(tree) {
    setTree(tree);
  }
  function toggleTips() {
    setIsTipsOpen(!isTipsOpen);
  }

  function toggleMap() {
    setIsMapOpen(!isMapOpen);
  }
  console.log(tree);
  return (
    <Router basename={window.location.pathname || ''}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/champion-map">
            <ChampionMap />
          </Route>
          <Route path="/treehunt-map">
            <TreeHuntMap />
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
              tree={tree}
              handleTree={handleTree}
            />
          </Route>
          <Route path="/treehunt">
            <TreeHunt
              toggleTips={toggleTips}
              isTipsOpen={isTipsOpen}
              isMapOpen={isMapOpen}
              toggleMap={toggleMap}
              tree={tree}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
