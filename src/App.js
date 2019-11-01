import React from 'react'
import Header from './component/header/Header'
import Calculator from './component/calculator/Calculator'
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Calculator />
      </Grid>
    </Grid>
  )
}

export default App
