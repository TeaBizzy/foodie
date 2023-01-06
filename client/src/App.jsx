import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Example from './components/example';

// Example App to showcase fetching data from the rails backend and displaying it with React.
// We can request data from "http://localhost3000/RESOURCE-PATH-HERE".

const EXAMPLE_API_URL = 'http://localhost:3000/examples'

function App() {
  // Example State.
  const [examples, setExamples] = useState([]);
  
  // Called by the button.
  function getExampleData() {
    axios.get(EXAMPLE_API_URL).then(res => setExamples(res.data))
  }

  // An array containing JSX components.
  const exampleList = examples.map((example) => {
    return (
      <Example 
        key={example.id}
        name={example.name}
        price_cents={example.price_cents}
        isRare={example.is_rare}
      />
    )
  })

  return (
    <div className="App">
      <h1>💎 Types of Gems 💎</h1>
      {examples.length < 1 && <button onClick={getExampleData}>Fetch Data</button>}
      {exampleList}
    </div>
  );
}

export default App;
