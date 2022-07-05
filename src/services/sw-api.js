import { useState, useEffect } from 'react';
import axios from 'axios'



function GetAllStarships(){

const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(){
const result = await axios(
      'https://swapi.dev/api/starships/',
    );
    setData(result.data.results);
    }
    fetchData()

  },[]);
const results = data

  return results
}

export default GetAllStarships