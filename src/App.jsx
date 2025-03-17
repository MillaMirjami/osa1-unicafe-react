import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const incrementGood = () => {
    setGood(good +1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral +1)
  }
  const incrementBad = () => {
    setBad(bad +1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementGood} text="good"/>
      <Button onClick={incrementNeutral} text="neutral"/>
      <Button onClick={incrementBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

const Statistics = (props) => {
  const average = (props.good - props.bad) / props.all
  const positiveProsent = props.good / (props.all) * 100

  console.log("values: ", props)
  console.log("average and positive: ", average, positiveProsent)

  if(props.all === 0) {
    return <p>no feedback given</p>
  } 
  else {
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positiveProsent + " %"}/>
        </tbody>
      </table>
    )
  }
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

export default App