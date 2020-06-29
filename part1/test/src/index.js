import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Random = (array) => {
  return (
     Math.floor(Math.random() * array.length)
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState(new Array(6).fill(0))
  


  const Vote = () => {
        const newVotes = [...count]
        newVotes[selected] += 1;
        setCount(newVotes);   
    }

    const Most = (array) => {
      let most = 0;
      array.forEach(element => {
          if(element > most){
            most = array.indexOf(element);
          }
        });
      return (
        most
      )
    }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {props.anecdotes[selected]}
      <p>has {count[selected]} votes</p>
      <div>
        <button onClick={() => setSelected(Random(anecdotes))} >Next anecdotes</button>
        <button onClick={Vote}>Vote</button>
        <h1>Anecdotes with the most votes</h1>
        <p>{props.anecdotes[Most(count)]}</p>
        <p>has {count[Most(count)]} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, 
  document.getElementById('root')
)