import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { API_BEER_URL } from '../utils/constants'
import { Grid, createStyles} from '@mantine/core';

const useStyles = createStyles(() => ({image: {width: '120px', '&:hover': {padding: '30px'}}}))

function Beers() {
    const [beers, setBeers] = useState([])

    const {classes} = useStyles()

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
     <Grid>
     {beers.map(beer => (
        <Fragment key={beer._id}>
        <Grid.Col md={6} lg={3}>
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