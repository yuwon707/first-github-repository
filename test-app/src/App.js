import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import styled from 'styled-components';

const TextBox = styled.div`
  color: yellow;
  font-size: 35px;
  margin: 10px 0px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <TextBox>
          Edit <code>src/App.js</code> and save to reload.
        </TextBox>
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
