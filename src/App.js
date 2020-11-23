import React, { useEffect, useState } from 'react';
import MainMap from "./components/MainMap";
import "./App.css"

function App({ domElement }) {
  return (
    <div className="reddit_widget__app">
      <MainMap />
    </div>
  );
}

export default App;
