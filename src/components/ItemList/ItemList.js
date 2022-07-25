import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import {Grid} from '@mui/material'
import { Container} from '@mui/system'

const ItemList = ({productList}) => {
  return (
    <Container fixed>
        <div className='containerItem'>
          <Grid container spacing={{ xs: 4, md: 4 }} columns={{}}>
            {productList.map((product)=>
              <Grid key={product.id} item xs={4} sm={4} md={4}>
                <Item key={product.id} product={product}/>
              </Grid>)}
          </Grid>
        </div>
    </Container>
  )
}

export default ItemList