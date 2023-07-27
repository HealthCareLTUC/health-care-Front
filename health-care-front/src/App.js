

import './App.css';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
//import Reserve from './components/Reserve/Reserve';
import About from './components/About'
import { Route, Routes } from 'react-router';
//import Reserve from './components/Reserve/Reserve';
import Pharmacy from './components/Pharmacy/Pharmacy';
import Index from './components/index/Index'
import PatientPage from './PatientPage'
import LoginPatient from './components/LoginPatient/LoginPatient';
import Slider from '../src/components/slider/slider'
import PatientProfile from './patientProfile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (


    <div className="App">


      {/* <Index /> */}

{/* <Header/> */}


      {/* <LoginPatient /> */}
      
    
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/patientPage" element={<PatientPage />} />
        <Route path="/patientPage" element={<PatientPage />} />

     
        <Route path='/about' element={<About />} />
        <Route path='/pharmacy' element={<Pharmacy />} />
        <Route path='/profile' element={<PatientProfile/>} />

      </Routes>
      <Footer/>
    </div>


  );
}

export default App;
