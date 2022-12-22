import {useState} from 'react'

// Created Frequently Used Components
const Header = ({text}) => <h1>{text}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

// Created Components to Render Anecdotes and Votes
const Anecdotes = ({text, votesCount}) => {
  return(
    <div>
    <p>{text}</p>
    <p>has {votesCount} votes</p>
    </div>
  )
}


// Finding Winner
const Winner = ({anecdotes, allVotes}) => {
  // Found Max in Array
  const highestVoteCount = Math.max(...allVotes)
  // Used Max to Find Index of Highest
  const WinnerCountIndex = allVotes.indexOf(highestVoteCount)
  // Using Highest Index Rendered Anecdotes
  const winner = anecdotes[WinnerCountIndex]

  // Conditional Rendering
  if(highestVoteCount !== 0){
    return (
      <>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
      </>
    )
  }
  else{
    return (
      <p>No Votes Done</p>
    )
  }
  
}


function App() {

  // Anecdotes in Array
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // Created States for App.js
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(7).fill(0))

  // Handled The Random Generation of Anecdotes using Math.Random Functions.
  const handleAnecdoteClick = () => {
    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const arrayIndex = randomInteger(0, 6)
    setSelected(arrayIndex)
  }

  // Understand: Download --> Edit --> Upload Concept.
  const handleVoteClick = () => {
    
    // Created a New Array out of Old Array (Never Manipulate Original In React)
    const newAllVotes = [...allVotes]
    
    // Updated the current indexed votes in the new array.
    newAllVotes[selected] += 1

    // Returned The New Array [0,1,0,0,0,0,0]
    setAllVotes(newAllVotes)
  }

  return (
    <>
    {/* Header with Props */}
    <Header text={'Anecdotes'}/>
    <Anecdotes text = {anecdotes[selected]} votesCount= {allVotes[selected]} />
    
    {/* Buttons with Props */}
    <Button onClick = {handleAnecdoteClick} text='next anecdotes'/>
    <Button onClick = {handleVoteClick} text='Vote'/>

    {/* Most Voted  with Props*/}
    <Header text = {'Most Voted Anecdotes'} />
    <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </>
  );
}

export default App;
