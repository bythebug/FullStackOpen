import {useState} from 'react';


const App = () => {
  
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
     setClicks(...clicks, clicks.left+1)
  }

  const handleRightClick = () => {
    setClicks(...clicks, clicks.right+1)
  }

  return (
    <>
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {clicks.right}
    </div>

    </>
  );
}

export default App;
