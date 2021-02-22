import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import { DRINK } from './shared/drinks';
import { FOOD } from './shared/fooddrink';
import { GAMES } from './shared/games';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
