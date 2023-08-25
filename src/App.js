import Drawer from './drawer';
import React, { useState } from 'react';
import AppBar from './appBar';
import Box from '@mui/material/Box';
import {  Fab, Toolbar } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ExpandMore, ExpandLess } from "@mui/icons-material"
import ChatBot from './chatBot';

const Home = lazy(() => import('./home'));


function App() {

  const [drawerState, setDrawerState] = useState(false)
  const [botState, setBotState] = useState(false)

  const handleHamburgerMenu = () => {
    setDrawerState(!drawerState)
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar handleHamburgerMenu={handleHamburgerMenu} />
      <Drawer drawerState={drawerState} handleHamburgerMenu={handleHamburgerMenu} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {/* <Container> */}
          <Suspense fallback={<div></div>}>
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route exact path="/" element={<Home />} ></Route>
            </Routes >
          </Suspense >
        {/* </Container> */}
      </Box>

      {botState && <ChatBot />}

      <Fab size='small' sx={{ position: "fixed",  bottom: 16, right: 16 }} onClick={() => setBotState(!botState)}>
        {botState ? <ExpandMore /> : <ExpandLess />}
      </Fab>
    </Box>
  );
}

export default App;
