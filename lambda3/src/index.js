import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './pages/pagegames';
import Page2 from './pages/pageresultado';
import Reset from './generic/Reset';
import Base from "./styles/elements/Base";
import {BrowserRouter,Routes,Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/champion" element={<Page2 />} />
      </Routes>
      <Base/>
      <Reset />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
