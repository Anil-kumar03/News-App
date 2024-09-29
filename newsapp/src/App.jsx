import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import './App.css';
import { useState } from 'react';

function App() {
  const [category,setCategory] =useState('')
  return (
    <div>
  <Navbar setCategory={setCategory}/>
  <NewsBoard category={category}/>
    </div>
  );
}

export default App;
