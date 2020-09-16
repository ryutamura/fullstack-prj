import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Search from "./Search";
import Info from "./Info";
import axios from "axios";
import Gmap from "./Map";


function App() {
  const [rapperList, setRapperList] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const allRappers = await axios.get('api/rappers')
      setRapperList(allRappers.data)
    };
    fetchData();
  }, []);

  return (
    <div className="App">
        <p>RAP ATLAS</p>
        <Gmap rapperList={rapperList}/>
    </div>
  );
}

export default App;
