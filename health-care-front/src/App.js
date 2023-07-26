



import './App.css';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
//import Reserve from './components/Reserve/Reserve';
import About from './components/About'
import { Route,Routes } from 'react-router';
//import Reserve from './components/Reserve/Reserve';
import Pharmacy from './components/Pharmacy/Pharmacy';
import Index from './components/index/Index'
function App() {
  return (

   
    <div className="App"> 
    

   <Index />


      
   
    <Routes> 
      <Route path='/about' element={<About/>}/>
      <Route path='/pharmacy' element={<Pharmacy/>}/>
     <Route path='/profile' element={<></>}/>
    
    </Routes>
                                     
                                     
                                     
    </div>


  );
}

export default App;
