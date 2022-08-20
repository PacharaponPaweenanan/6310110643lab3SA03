import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
const word2 = "LOVE";
const word3 = "BOOK";
const word4 = "kill";
const word5 = "school";
const textInput = <input type="text" />
function App() {
return (
  <div className='backgroung'>
    <h1 className='head'>GameCard</h1>
    <p className='play'>NamePalyer</p>
    <p>{textInput}</p>
     <WordCard value={word}/>
     <WordCard value={word2}/>
     <WordCard value={word3}/>
     <WordCard value={word4}/>
     <WordCard value={word5}/>
  </div>
  );
}


export default App;