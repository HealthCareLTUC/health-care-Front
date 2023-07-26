
import PatienttP from './PatientP';
import './App.css';
import PatientProfile from './patientProfile';



import { Routes, Route } from 'react-router-dom';
import NavBar from './navBar';
function App() {
  return (
    <div className="App">
      {/* <Navbars/> */}
      <Routes>
        <Route path='/' element={<PatienttP />} />
        <Route path='/profile' element={<PatientProfile />} />
        <Route path='/fav' element={<favDoc />} />



        {/* <PatientProfile/> */}
      </Routes>
    </div>
  );
}

export default App;
