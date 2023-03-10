function Hello({name, age}){

    const bornYear = () => {
      const yearNow = new Date().getFullYear();
      return yearNow - age
    }
  
    return(
      <div>
        <p>Hello {name}, you are {age} years old.</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    );
  }
  
  
  function App() {
    const name="Peter";
    const age="10";
    
    return (
      <div>
      <h1>Greetings</h1>
      <Hello name="George" age={26+10} />
      <Hello name={name} age={age}/>
      </div>
    );
  }
  
  export default App;
  