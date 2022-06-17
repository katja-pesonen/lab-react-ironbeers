import React from 'react'
import Navbar from '../components/Navbar';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { API_BEER_URL } from '../utils/constants'
import { createStyles} from '@mantine/core';

const useStyles = createStyles(() => ({image: {width: '120px'}}))

function SingleBeer() {

    const { id } = useParams()
    const [beer, setBeer] = useState({})
    const [isFetching, setIsFetching] = useState(true)
    const {classes} = useStyles()


    const fetchBeerDetails = async() => {
        const response = await fetch(`${API_BEER_URL}/beers/${id}`)
        const parsed = await response.json()
        setBeer(parsed)
        setIsFetching(false)
    }

    useEffect(() => {
        if (isFetching) {
        fetchBeerDetails(setBeer)
        }
    }, [id, isFetching])



  return isFetching ? ( 
    <h1>Loading...</h1> 
  ) : (
    <div>
    <Navbar />
     <h2>Beer Details:</h2>
     <img src={beer.image_url} alt={beer.name} className={classes.image}/>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <h4>Contributed By:</h4>
        <p>{beer.contributed_by}</p>
        <h4>Description:</h4>
        <p>{beer.description}</p>
        <h4>Brewers Tips:</h4>
        <p>{beer.brewers_tips}</p>

    </div>
  )
}

export default SingleBeer