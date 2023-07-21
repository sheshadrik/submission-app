import logo from './logo.svg';
import './App.css';
import BasicDetails from './Components/BasicDetails';
import ContactDetails from './Components/ContactDetails';
import { useState } from 'react';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ReviewDetails from './Components/ReviewDetails';

function App() {  
  return (<BrowserRouter>
    <div className="App">
      <header className="App-header">
        {/* {pageNo === 1?
      <BasicDetails></BasicDetails> :
      <ContactDetails></ContactDetails> }     
      */}
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/apply' element={<BasicDetails />} />
            <Route path='/contact' element={<ContactDetails />} />
            <Route path='/review' element={<ReviewDetails />} />             
      </Routes>       
      </header>

    </div>
    </BrowserRouter>
  );
}

export default App;
