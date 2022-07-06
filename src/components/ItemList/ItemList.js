import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import {Grid, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { Container} from '@mui/system'
import Typography from '@mui/material/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ItemList = ({productList}) => {
  return (
    <Container fixed>

      <ThemeProvider theme={theme}>
        <Typography align='center' variant="h3">Lista de productos</Typography>
      </ThemeProvider>

        <div className='containerItem'>
          <Grid container spacing={{ xs: 4, md: 4 }} columns={{}}>
            {productList.map((product)=>
              <Grid item xs={4} sm={4} md={4}>
                <Item key={product.id} product={product}/>
              </Grid>)}
          </Grid>
        </div>
    </Container>
  )
}

export default ItemList