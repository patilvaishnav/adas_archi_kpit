
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <h1>homepage</h1>
     <BrowserRouter>
     <Navbar />
     </BrowserRouter>
    </div>
  );
}

export default App;
