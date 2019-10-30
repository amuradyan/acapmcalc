import React from 'react'
import Header from '../header/Header'
import Calculator from '../calculator/Calculator'
import Grid from '@material-ui/core/Grid';

const CalculatorUI = () => {

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

export default CalculatorUI