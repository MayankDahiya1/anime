import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {Anime, Manga, About} from './container';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
function App() {
  return (
   <>
   
   <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path="/" element={<Anime/>}/>
    <Route path="/manga" element={<Manga/>}/>
    <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
   </>

  );
}

export default App;
