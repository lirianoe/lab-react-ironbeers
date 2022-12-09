import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import DetailedBeer from './pages/DetailedBeer';

function App() {
  return (
    <div className="App">

     

      {/* PAGES */}
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path="/beers" element={<Beers/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
        <Route path='/beers/:Id' element={<DetailedBeer/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
