// import React, { useState, useEffect } from 'react';
import './App.css';
import Ship from './Compontents/Ship';
import GetAllStarships from './services/sw-api';
import Header from './Compontents/Header'



function App() {

let results = GetAllStarships()

  console.log(results)
  

  const mappedData= results.map((result,index)=>{
    return <Ship result = {result}></Ship>

  })

  
  return (
    <div className="App">
      <Header></Header>
      <div className='Cards'>
    {mappedData}
    </div>
    </div>
  );
}

export default App;
