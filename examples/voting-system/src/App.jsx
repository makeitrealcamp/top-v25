import { useState } from 'react';

import Candidates from './components/Candidates';
import Config from './components/Config';
import TotalVotes from './components/TotalVotes';
import Results from './components/Results';

import './App.css';

const listInitOfCandidates = [
  { id: 1, name: "Sally Student", votes: 0 },
  { id: 2, name: "Billy Bob", votes: 0 },
  { id: 3, name: "Joey Jojo", votes: 0 },
  { id: 4, name: "Anna Anxious", votes: 0 },
];

const App = () => {
  const [candidates, setCandidates] = useState(listInitOfCandidates);

  return (
    <div className="App-header">
      <h1>Sistema de votaciones</h1>
      <div className="vote-container">
        <Candidates />
      </div>
      <div className="info-container">
        <div className="filter">
          <Config />
        </div>
        <div className="total-votes">
          <TotalVotes />
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
