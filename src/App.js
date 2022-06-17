
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import {useState} from 'react'
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";


function App() {

  const [beers, setBeers] = useState([])

  // const [searchBeers, setSearchBeers] = useState('');


    const addNewBeer = (newBeer) => {
      const updatedBeers = [...beers, newBeer];
     
      setBeers(updatedBeers);
    };



  return (
    <div className="App">



<Routes>
    <Route path="/" element={ <Home />} />
    <Route path="/beers" element={ <Beers />} />
    <Route path="/new-beer" element={ <NewBeer addNewBeer = {addNewBeer} />} />
    <Route path="/random-beer" element={ <RandomBeer />} />
    <Route path="/beers/:id" element={ <SingleBeer />} />
</Routes>
    </div>
  );
}

export default App;
