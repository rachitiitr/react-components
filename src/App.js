import logo from './logo.svg';
import './App.css';
import Draggable from './components/Draggable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Draggable>
          <img src={logo} className="App-logo" alt="logo" />
		</Draggable>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
