import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navsec from './components/Navsec';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footersection from './components/Footersection';
import Shoecardsection from './components/Shoecardsection';
import Tabssection from './components/Tabssection';

function App() {
  return (
    <div className="App">
      <Navsec />
      <Section1 />
      <Section2 />
      <Tabssection />
      <Shoecardsection />
      <Footersection />
    </div>
  );
}

export default App;
