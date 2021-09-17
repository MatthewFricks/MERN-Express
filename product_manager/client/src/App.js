import './App.css';
import React from 'react';
import Form from './components/Form';
import OneProduct from './components/OneProduct'
import AllProducts from './components/AllProducts'
import Edit from './components/Edit'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          {/* <Main/> */}

          <Route exact path = "/">
            <AllProducts></AllProducts>
          </Route>

          <Route exact path = "/new">
            <Form></Form>
          </Route>

          <Route exact path = "/product/:idParam">
            <OneProduct></OneProduct>
          </Route>

          <Route exact path = "/product/edit/:idParam">
            <Edit></Edit>
          </Route>

        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
