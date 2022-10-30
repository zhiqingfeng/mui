import React from 'react';
import './App.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import TabApp from './components/TabApp';

function App() {
  return (
    <div className='App'>
      <TabApp/>
    </div>
  )
}

export default App;