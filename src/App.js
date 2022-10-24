import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Todolist from './components/Todolist';
import Home from './components/Home';


function TabMenu() {
  const [value, setValue] = useState('one');

  const handleChange = ( event, value) => {
    setValue(value);
  }

  return (
    <div className='App'>
    <Todolist />
      <Tabs value={value} onChange={handleChange}>
          <Tab value="one" label="Home" />
          <Tab value="two" label="Todolist" />
      </Tabs>
        {value === 'one' && <Home /> }   
        {value === 'two' && <Todolist /> }   
    </div>
  );
};

export default TabMenu;