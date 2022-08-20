import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
const word2 = "LOVE";
const word3 = "BOOK";
function App() {
return (
  <div>
     <WordCard value={word}/>
     <WordCard value={word2}/>
     <WordCard value={word3}/>

  </div>
  );
}


export default App;