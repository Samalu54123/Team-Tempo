import logo from './logo.svg';
import './App.css';
import SoundLibrary from './SoundLibrary';
import { Route,Link, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
          <Routes>
            <Route exact path='/SoundLibrary' Component={SoundLibrary}/>
          </Routes>
        </BrowserRouter>
        <a href='/SoundLibrary'>Sound Library</a>
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
