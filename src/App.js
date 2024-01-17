import React from 'react';
import './I.css';
import Navbar from './Components/Navbar/Navbar';
import Responsive from './Components/Navbar/Responsive';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Projects from './Components/Projects/Projects';
import { Box } from '@mui/material';
import Sells from './Components/We deal in/Sells'
import Me from './Components/We deal in/Me'
import 'animate.css';

function App() {
  return (
    <>
     <Box  sx={{
        }}>
        <Navbar />
        <Responsive />
        <Jumbotron/>
        <Me/>
      <Projects/>
<Sells/>
      </Box>
    </>
  );
}

export default App;
