import {useState} from 'react';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) =>  <button onClick={onClick}> {text} </button>


function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
        setCounter(counter+1)
  }

  const decreaseByOne = () => setCounter(counter-1)

  const setToZero = () => {
    setCounter(0)
  }

  console.log('rendering...',counter);
  return (
    <>
    <Display counter={counter} />
    <Button onClick={increaseByOne} text='Plus'/>
    <Button onClick={decreaseByOne} text='Minus'/>
    <Button onClick={setToZero} text='Zero'/>
    </>
  );
}

export default App;
