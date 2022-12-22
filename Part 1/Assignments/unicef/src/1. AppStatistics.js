import {useState} from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}> {text}</button> 
const StatisticLine = ({text, value}) => {
  return(
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if(good !== 0 | bad !== 0 | neutral !== 0){
    return(
      <>
      <h1>Statistics</h1>
      <StatisticLine text = 'good' value = {good}/>
      <StatisticLine text = 'neutral' value = {neutral} />
      <StatisticLine text = 'bad' value = {bad} />
      <StatisticLine text = 'all' value = {bad+good+neutral} />
      <StatisticLine text = 'average' value = {(bad+good+neutral)/3} />
      <StatisticLine text = 'positive % ' value = {(good/(bad+good+neutral))*100} />
      </>
    )
  }
  else{
    return(
      <>
      <p>Please Enter Some Data</p>
      </>
    )
  }
}

function App() {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const setGoods = () => {
  setGood(good + 1)
}

const setNeutrals = () => {
  setNeutral(neutral + 1)
}
const setBads = () => {
    setBad(bad + 1)
}

  return (
    <>
    <h1>Give Feedback</h1>
    <Button onClick={setGoods} text='good'/>
    <Button onClick={setNeutrals} text='neutral'/>
    <Button onClick = {setBads} text = 'bad' />

    <Statistics good = {good} neutral = {neutral} bad= {bad}/>    
    </>
  );
}

export default App;
