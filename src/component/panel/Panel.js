import Grid from '@material-ui/core/Grid';
import React from 'react';
import CB from '../calc_button/CalcButton';

const Panel = () => {
  return (
    <Grid container spacing={1}>
      <CB caption='CE' />  <CB />            <CB caption='Bsp' /> <CB caption='*' />
      <CB caption='7' />   <CB caption='8' /> <CB caption='9' />   <CB caption='/' />
      <CB caption='4' />   <CB caption='5' /> <CB caption='6' />   <CB caption='-' />
      <CB caption='1' />   <CB caption='2' /> <CB caption='3' />   <CB caption='+' />
      <CB caption='+/-' /> <CB caption='0' /> <CB caption='.' />   <CB caption='=' />
    </Grid>
  )
}

export default Panel