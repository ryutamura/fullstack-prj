import React from 'react';
import '../styles/App.css';
import Search from "./Search";
import Info from "./Info"


function App() {
  return (
    <div className="App">
      <p>this is the app component</p>
      <Search />
      <Info />
    </div>
  );
}

export default App;
