import React, { useEffect, useState } from 'react'
import { API_BEER_URL } from '../utils/constants'


function Beers() {
    const [beers, setBeers] = useState([])

    const fetchBeers = async(setter) => {
        const response = await fetch(`${API_BEER_URL}/beers`)
        const parsed = await response.json()
        console.log(parsed)
        setter(parsed)
    }

    useEffect(() => {
        fetchBeers(setBeers)
    }, [])

  return (
    <div>

     <h2>List of Beers</h2>
     {beers.map(beer => (
        <div>
        <img src={beer.image_url} alt={beer.name} />
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>Contributed By: {beer.contributed_by}</p>
        </div>
     ))}
    
    </div>
  )
}

export default Beers