import { useState, React, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Badge from './component/Badge/Badge';
import ChampionMap from './component/ChampionMap/ChampionMap';
import CodeEnter from './component/CodeEnter/CodeEnter';
import Home from './component/Home/Home';
import TreeHunt from './component/TreeHunt/TreeHunt';
import TreeHuntMap from './component/TreeHuntMap/TreeHuntMap';

function App() {
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [tree, setTree] = useState({});
  const [badges, setBadges] = useState([]);

  function handleTree(tree) {
    setTree(tree);
  }

  function handleBadge(newBadge) {
    setBadges([...badges, newBadge]);
  }
  function toggleTips() {
    setIsTipsOpen(!isTipsOpen);
  }

  function toggleMap() {
    setIsMapOpen(!isMapOpen);
  }

  useEffect(() => {
    const badgeCard = JSON.parse(localStorage.getItem('badgeCard'));
    if (badgeCard) {
      setBadges(badgeCard);
    }
  }, []);

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
            <TreeHuntMap badges={badges} />
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
              handleBadge={handleBadge}
              badges={badges}
            />
          </Route>
          <Route path="/badge">
            <Badge badges={badges} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
