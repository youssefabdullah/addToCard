import { Button, Card, Grid, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Card1 from './Component/Card1'
import { storeRef, db } from './config/fire';
import Home from './Component/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import ViewCards from './Component/ViewCards';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/cards' component={ViewCards}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
