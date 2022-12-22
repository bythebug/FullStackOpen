function Header(props){
  return(
    <>
    <h1>{props.courseTitle}</h1>
    </>
  );
}

function Part(props){
  return(
    <>
    <p>{props.name} {props.excercise}</p>
    </>
  );
}

function Content(props){
  return(
    <>
    <Part name={props.part[0].name} excercise={props.part[0].excercises}/>
    <Part name={props.part[1].name} excercise={props.part[1].excercises}/>
    <Part name={props.part[2].name} excercise={props.part[2].excercises}/>
    </>
  );
}

function Total(props){
  return(
    <>
    <p> Number of Excercise {props.part[0].excercises+props.part[1].excercises+props.part[2].excercises}</p>
    </>
  );
}


function App() {

  const course = 'Half Stack application developemnt';
  const parts = [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of Component',
      excercises: 14
    }
  ]
 
  return (
    <div>
     <Header courseTitle = {course} />
     <Content part = {parts}/>
     <Total part = {parts}/>
    </div>
  );
}

export default App;
