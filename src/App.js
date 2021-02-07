
import './App.css';
import Mainheader from './components/Mainheadercomponent';
import Footer from './components/Footer';
import Secondaryheader from './components/Secondaryheader';

function App() {
  return (
    <div >
       <h1 className="pinkbox">I'm your pink box</h1>
       <Mainheader />
       <Secondaryheader />
       <Footer />
    </div>
  );
}

export default App;
