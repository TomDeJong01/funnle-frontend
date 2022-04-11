import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {Routes, Route} from "react-router";
import Home from "./components/home/home.jsx";
import ConfigPage from "./components/config/config-page.jsx";

function App() {
  return (
      // <Home/>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/config">Config</a></li>
              <li><a href="/config">Config</a></li>
            </ul>
          </nav>
        </header>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/config" exact element={<ConfigPage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
