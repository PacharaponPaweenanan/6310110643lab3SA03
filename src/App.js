import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
const word2 = "LOVE";
const word3 = "BOOK";
const textInput = <input type="text" />
function App() {
return (
  <div>
    <h1>GameCard</h1>
    <p>ชื่อผู้เล่น</p>
    <p>{textInput}</p>
     <WordCard value={word}/>
     <WordCard value={word2}/>
     <WordCard value={word3}/>

  </div>
  );
}


export default App;