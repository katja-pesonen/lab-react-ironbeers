// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import {useState} from 'react'


function App() {

  const [beers, setBeers] = useState([])

  return (
    <div className="App">

<nav className="navbar">
    <div className="container">
        <h3>IronBeers</h3>
        <a className="navbar" href="/">Home</a>
        <a className="list" href="/beers">Beers</a>
       </div>
     </nav>

     <Beers beers={beers} />

<Routes>
  <Route path="/" element={ <Home />} />
  <Route path="/beers" element={ <Beers />} />
</Routes>
    </div>
  );
}

export default App;
