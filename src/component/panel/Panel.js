import Grid from '@material-ui/core/Grid'
import React from 'react'
import CB from '../calc_button/CalcButton'
import pristineState from '../util/state'
import axios from 'axios'

const axiosInstance = axios.create({baseURL: 'http://localhost:8080/'})

const replaceAll = (str, search, replacement) => {
  return str.split(search).join(replacement);
};

const Panel = ({ state, setState }) => {
  const formatExpression = (expression) => {
    const additionFormated = replaceAll(expression, '+', ' + ')
    const subtractionFormated = replaceAll(additionFormated, '-', ' - ')
    return subtractionFormated
  }

  const handleDigit = (digit) => {

    const oldExpression = state.expression
    const expression = (oldExpression.length === 1 && oldExpression === '0') ? digit : oldExpression + digit
    const display = formatExpression(expression)
    const memory = state.memory !== 0 ? 0 : state.memory
    const newState = {
      ...state,
      expression: expression,
      display,
      memory
    }
    setState(newState)
    console.log(state);
  }

  async function handleOperator(operator) {
    const oldExpression = state.expression

    switch (operator) {
      case 'CE':
        setState(pristineState)
        break;
      case '+':
      case '-':
        let newExpression = ''

        if (oldExpression.endsWith('+') || oldExpression.endsWith('-'))
          newExpression = oldExpression.replace(/.$/, operator)
        else
          newExpression = oldExpression + operator

        const display = formatExpression(newExpression)
        const newState = {
          ...state,
          expression: newExpression,
          display
        }

        setState(newState)
        break;
      case '=':

        let finalExpression = oldExpression
        if (oldExpression.endsWith('+') || oldExpression.endsWith('-'))
          finalExpression = finalExpression.replace(/.$/, '')

        const res = await axiosInstance.get('/values', {
          params: {
            expression: finalExpression
          }
        })

        if(res.status === 200) {
          // const memory = eval(finalExpression)
          const finalState = {
            ...pristineState,
            memory: res.data
          }
          setState(finalState)
        } else {
          console.log(res.statusText);
        }
        break;
      default:
        break;
    }
    console.log(state);
  }

  return (
    <Grid container spacing={1}>
      <CB caption='CE' handleClick={handleOperator} />  <CB />             <CB caption='Bsp' /> <CB caption='*' />
      <CB caption='7' handleClick={handleDigit} />   <CB caption='8' handleClick={handleDigit} /> <CB caption='9' handleClick={handleDigit} />   <CB caption='/' handleClick={handleOperator} />
      <CB caption='4' handleClick={handleDigit} />   <CB caption='5' handleClick={handleDigit} /> <CB caption='6' handleClick={handleDigit} />   <CB caption='-' handleClick={handleOperator} />
      <CB caption='1' handleClick={handleDigit} />   <CB caption='2' handleClick={handleDigit} /> <CB caption='3' handleClick={handleDigit} />   <CB caption='+' handleClick={handleOperator} />
      <CB caption='+/-' /> <CB caption='0' handleClick={handleDigit} /> <CB caption='.' />   <CB caption='=' handleClick={handleOperator} />
    </Grid>
  )
}

export default Panel