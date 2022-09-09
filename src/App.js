
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Slides from './Slides/Slides';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Slides />
     <Home />
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
