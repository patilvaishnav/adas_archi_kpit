import React ,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Slides from './Slides/Slides';
import Footer from './Footer/Footer';
import All_Elements from './Adas_Elements/All_Elements';
import All_Features from './Adas_Features/All_Features';
import Adas_Archi from './Adas_Architecture/Adas_Archi';
import About_Us from './About_us/About_us';



function App() {
  const [width, setWindowWidth] = useState(0);

  // componentDidMount...runs only once
  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showTopNavMenu: width > 1023
  }
  
  return (
    <div className="App">
    

      <BrowserRouter>
        {/*HomePage*/}
        <Route exact={true} path='/'>
          <Navbar />
          <Slides />
          <Home />
          <Footer />
        </Route>

        {/*Adas Architecture page*/}
        <Route exact={true} path='/adas_archi'>
          <Navbar />
          <Adas_Archi />
          <Footer />
        </Route>

        {/*Adas Features page*/}
        <Route exact={true} path='/all_features'>
          <Navbar />
          <All_Features />
          <Footer />
        </Route>

        {/*Adas Elements Page*/}
        <Route exact={true} path='/all_elements'>
          <Navbar />
          <All_Elements />
          <Footer />
        </Route>

        {/*About Us page*/}
        <Route exact={true} path='/about_us'>
          <Navbar />
          <About_Us />
          <Footer />
        </Route>

      </BrowserRouter>


    </div>
  );
}

export default App;
