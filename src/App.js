import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // call api
  const [bio, setBio] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => setBio(data.results))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        {/* mapping here to read the data  */}
        {

          bio.map(bo => <Bio pic={bo.picture.large} name={bo.name.first} email={bo.email} ></Bio>)
        }
      </header>
    </div >
  );
}
// component for counter part
function Counter() {
  // style for button and h3
  const counterStyle = { border: '2px solid gold', padding: '4px' }
  const buttonStyle = { margin: '3px', padding: '5px', backgroundColor: 'salmon' }
  const [count, setCount] = useState(0);
  // for increase button
  let increase = () => {
    setCount(count + 1);
  }
  // for decrease Button
  let decrease = () => {

    setCount(count - 1);
  }
  return (
    <div>
      <h3 style={counterStyle}>counter: {count}</h3>
      <button style={buttonStyle} onClick={increase}>INCREASE</button>
      <button style={buttonStyle} onClick={decrease}>DECREASE</button>
    </div>
  );
}

// component for call API data 
function Bio(props) {
  const bioStyle = {
    border: '2px solid gray',
    marginTop: "20px",
    padding: '20px',
    width: '300px',
    backgroundColor: 'black',
  }
  const photoStyle = {
    display: 'flex',


  }
  return (
    <div style={photoStyle}>
      < div style={bioStyle}>
        <img src={props.pic} alt="" />
        <h2>Name: {props.name}</h2>
        <h6>email: {props.email} </h6>
      </div >
    </div>
  );
}

export default App;
