
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Slides from './Slides/Slides';
import Footer from './Footer/Footer';
import All_Elements from './Adas_Elements/All_Elements';
import All_Features from './Adas_Features/All_Features';
import Adas_Archi from './Adas_Architecture/Adas_Archi';
import About_Us from './About_us/About_us';



function App() {
  return (
    <div className="App">
      <Navbar />
     <BrowserRouter>
     {/*HomePage*/}
     <Route exact={true} path='/'>
     <Slides />
     <Home />
     </Route>

     {/*Adas Architecture page*/}
     <Route exact={true} path='/adas_archi'>
     <Adas_Archi />
     </Route>

     {/*Adas Features page*/}
     <Route exact={true} path='/all_features'>
      <All_Features />
     </Route>

     {/*Adas Elements Page*/}
     <Route exact={true} path='/all_elements'>
      <All_Elements />
     </Route>  

     {/*About Us page*/}
     <Route exact={true} path='/about_us'>
      <About_Us />
     </Route> 
     
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
