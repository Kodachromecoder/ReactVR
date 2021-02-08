import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
      <div >
        <h1 className="pinkbox">I'm your pink box from the App component</h1>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
