import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/Error404/Error404';

function App() {
  return (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/categoria/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                <Route path={"*"} element={<Error404 />} /> 
              </Route>
            </Routes>
          </BrowserRouter>
  ); 
};

export default App;