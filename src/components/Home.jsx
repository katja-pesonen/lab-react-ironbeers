import React from 'react'
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function Home() {
  return (
    <div>

    <div><h2>Home</h2></div>

    <div>
<img src={allBeers} alt='all beers pic' />
<a className="list" href="/beers">All Beers</a>
<p>Text goes here...</p>
   </div>

   <div>
<img src={randomBeer} alt='random beer pic' />
<a className="list" href="/random-beer">Random Beer</a>
<p>Text goes here...</p>
   </div>

   <div>
<img src={newBeer} alt='new beer pic' />
<a className="list" href="/new-beer">New Beer</a>
<p>Text goes here...</p>
   </div>

    </div>
  )
}

export default Home