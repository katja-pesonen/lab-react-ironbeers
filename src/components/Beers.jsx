import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { API_BEER_URL } from '../utils/constants'
import { Grid, createStyles} from '@mantine/core';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom"


const useStyles = createStyles(() => ({image: {width: '120px', '&:hover': {padding: '30px'}}}))

function Beers() {
    const [beers, setBeers] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const navigate = useNavigate()

    const {classes} = useStyles()

    const fetchBeers = async() => {
        const response = await fetch(`${API_BEER_URL}/beers`)
        const parsed = await response.json()
        setBeers(parsed)
        setIsFetching(false)
    }

    useEffect(() => {
        if (isFetching) {
        fetchBeers(setBeers)
        }
    }, [isFetching])

  return isFetching ? ( 
    <h1>Loading...</h1> 
  ) : (
    <div>
<Navbar />
     <h2>List of Beers</h2>
     <Grid>
     {beers.map(beer => (
        <Fragment key={beer._id} >
        <Grid.Col md={6} lg={3} onClick={()=> navigate(`/beers/${beer._id}`)} style={{
            border: '1px solid black', 
            borderRadius: '12px', 
            padding: '6px', 
            cursor: 'pointer'}}>
        <img src={beer.image_url} alt={beer.name} className={classes.image}/>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>Contributed By: {beer.contributed_by}</p>
        </Grid.Col>
        </Fragment>
     ))}
     </Grid>
    
    </div>
  )
}

export default Beers