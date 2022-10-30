import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Todolist from './components/Todolist';
import Home from './components/Home';

function TabApp() {
  const [value, setValue] = useState('Home');

  const handleChange = ( event, value) => {
    setValue(value);
  }

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
          <Tab value="home" label="Home" />
          <Tab value="todos" label="Todos" />
      </Tabs>
        {value === 'home' && <Home /> }   
        {value === 'todos' && <Todolist /> }   
    </div>
  );
};

export default TabApp;