
import React from 'react';
//import logo from './src/logo.png';
import Image from 'react-bootstrap/Image';
import logo from '../assests/iconDoctors.png'




const Header = () => {
  return (
    <header style={styles.header }>
    <Image src={logo} sm   className='logo'  style={{width:'100px'}}/> 
<h1>WELCOME TO HealthCare WEBSITE </h1>
      <h1>Health Care </h1>
      <nav style={styles.nav}>
     
      </nav>
     
    </header>
  );
};

const styles = {
  
  header: {
    backgroundColor:  '#C4DFDF', 
    color: '#fff',
    padding: '1rem',
    textAlign : 'left',
    fontSize: '1px',
    // width:'100px',

     
    
    
  },
  nav: {
    
    // display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    // innerHeight:'100px',
    outerHeight:'10px'
    
  },
  
};

export default Header;
  