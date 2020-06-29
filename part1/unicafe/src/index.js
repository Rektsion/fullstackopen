import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const Statistics = (props) => {
  const value = props.value
  if (isNaN(value) === true){
    return (
      <>
      <td>No feedback given</td>
      </>
    )
  }
  else{
  return (
    <>
        <td>{props.text}</td> 
        <td>{value}</td>
    </>

  )}
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <table> 
        <tbody>    
          <tr><Statistics text="good" value={good} /></tr>
          <tr><Statistics text="neutral" value={neutral} /></tr>
          <tr><Statistics text="bad" value={bad} /></tr>
          <tr><Statistics text="all" value={good+bad+neutral} /></tr>
          <tr><Statistics text="average" value={((good*1)+(neutral*0)+(bad*-1))/(good+neutral+bad)}/></tr>
          <tr><Statistics text="Positive" value={(good/(good+bad+neutral))*100} /></tr>
        </tbody> 
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)