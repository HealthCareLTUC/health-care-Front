
import React from 'react';
//import logo from './src/logo.png';
import Image from 'react-bootstrap/Image';



const Header = () => {
  return (
    <header style={styles.header }>

      <h1>Health Care </h1>
      <nav style={styles.nav}>
     
      </nav>
     
    </header>
  );
};

const styles = {
  header: {
    backgroundColor:  '#9dadbd', 
    color: '#fff',
    padding: '1rem',
    textAlign : 'left',
    fontSize: '12px'
    
  },
  nav: {
    
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    
  },
};

export default Header;
  