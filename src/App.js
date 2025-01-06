import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Corrected imports for v6
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import MediaCard from './components/Card';
import Header from "./components/Header";
import Collection from './components/Collection'; 
import ConnetctToWallet from "./components/ConnectToWallet";

// styles
import './main.css';


const App = () => {
  return (
    <BrowserRouter>  
      <>
        <Header />
        <Routes>
          <Route path="/" element={<><Carousel /><MediaCard /></>} />
          <Route path="/collection" element={<Collection />} />  
          <Route path="/connecttowallet" element={<ConnetctToWallet/>}/>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
