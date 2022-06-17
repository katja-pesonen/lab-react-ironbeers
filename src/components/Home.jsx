import React from 'react'
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function Home() {
  return (
    <div>

    <div>
    <h2>Home</h2>
    <p>Since beer is one of the most consumed drinks between Ironhackers 🍻 , 
    our mission here is to showcase some of the best-handcrafted beers, but not just that - 
    to save some as well so the rest of Ironhack community is informed 😌</p>
    </div>

    <div>
<img src={allBeers} alt='all beers pic' />
<a className="list" href="/beers">All Beers</a>
<p>Here you will find a list of all the available beers! Come and take a look. 😌 
There is something for everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. </p>
   </div>

   <div>
<img src={randomBeer} alt='random beer pic' />
<a className="list" href="/random-beer">Random Beer</a>
<p>Find a random beer to test out! Click on 'Random Beer' to see what turns up. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. </p>
   </div>

   <div>
<img src={newBeer} alt='new beer pic' />
<a className="list" href="/new-beer">New Beer</a>
<p>Create your own new beer! You can choose what you want to call it and upload an image too. 
You can add a short blurb about it, and your name will also go next to the beer as the creator. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. </p>
   </div>

    </div>
  )
}

export default Home